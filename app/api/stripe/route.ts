import { stripe } from "@/lib/stripe"
import { NextResponse } from "next/server"
import { absoluteUrl } from "@/lib/utils"
import { auth } from "@clerk/nextjs/server"
import { currentUser } from "@clerk/nextjs/server"
import prismadb from "@/lib/prismadb"

const settingsUrl = absoluteUrl("/settings")

export async function GET() {
  try {
    const { userId } = auth()
    const user = await currentUser()

    //IF THE USER IS SIGNEDIN

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    //FINDING THE USER WHO IS SIGNEDIN
    const userSubscription = await prismadb.userSubscription.findUnique({
      where: {
        userId: userId,
      },
    })

    //IF USER HAVE THE SUBSCRIPTION(directing them to settings)

    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      })

      return new NextResponse(JSON.stringify({ url: stripeSession.url }))
    }

    //IF USER DONT HAVE THE SUBSCRIPTION

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "FRIDAY Pro",
              description: "Unlimited AI Generation",
            },
            unit_amount: 200,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    })

    return new NextResponse(JSON.stringify({ url: stripeSession.url }))
  } catch (error) {
    console.log("[STRIPE_ERROR]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
