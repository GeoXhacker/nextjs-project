import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req, res) => {
    const {userId, prompt, tag} = await req.json();
    console.log({userId, prompt, tag}, "request");

    try {
        await connectToDB()
        const newPrompt = new Prompt({
            userId,
            prompt,
            tag
        })
        await newPrompt.save();
        console.log(newPrompt, "saved")
        return new Response(newPrompt, {status: 201})
    } 
    catch (error) {
        console.log(error, 'Error saving')
        return new Response("Failed to create prompt", {status: 500})
    }
}