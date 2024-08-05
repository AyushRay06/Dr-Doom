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

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
  } catch (error) {
    console.log("[STRIPE_ERROR]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
