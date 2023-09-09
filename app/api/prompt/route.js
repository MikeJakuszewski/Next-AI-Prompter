import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
  try {
    await connectToDB();
    const posts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(posts), { status: 201 });
  } catch (error) {
    console.log(`There has been an error: ${error}`);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
