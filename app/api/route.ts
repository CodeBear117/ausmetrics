import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

// initiate new GPT instance
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {

  // extract prompt from the req body
  const promptObject = await req.json(); // turns the req into an object
  const prompt = promptObject.prompt
  //console.log("Prompt:", prompt, "Time:", new Date().toISOString());

  // OpenAI Completions
  const completion = await openai.chat.completions.create({
          messages: [{ role: "system", content: prompt }],
          model: "gpt-4o",
          //stream: true,
        });

  // // access required part of API response
  const aiResponse = completion.choices[0]?.message?.content;

  // return response
  return NextResponse.json({ message: JSON.stringify(aiResponse) });
}