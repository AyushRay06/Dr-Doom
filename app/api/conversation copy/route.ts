import { auth } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"
import OpenAI from "openai"

//const configuration = new Configuration({
//    apiKey:process.env.OPENAI_API_KEY,
//})

//const openai = new OpenAIApi(configuration)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { messages } = body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 500 })
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 })
    }

    const response = await openai.chat.completions.create({
      //messages: { role: "system", content: "You are a helpful assistant." }],
      messages,
      model: "gpt-3.5-turbo",
    })
    //return NextResponse.json(response.data.choices[0].message)
    return new NextResponse(JSON.stringify(response.choices[0].message))
  } catch (error) {
    console.log("CONVERSATION_ERROR", error)
    return new NextResponse("Internalerror", { status: 500 })
  }
}
