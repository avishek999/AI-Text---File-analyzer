import vision from '@google-cloud/vision';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Vision and GenerativeAI clients
const visionClient = new vision.ImageAnnotatorClient();
const genAi = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function geminiText(req, res) {
  try {
    const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" }); // Updated model name
    const { prompt } = req.body;
    const result = await model.generateContent(prompt);
    const text = await result.response.text();
    res.json({ success: true, text });
  } catch (error) {
    console.error("Error generating text:", error);
    res.status(500).json({ success: false, error: "Failed to generate text" });
  }
}


export async function generateContent(req, res) {
  try {
    // Check if the image file is provided
    if (!req.file || !req.file.buffer) {
      return res.status(400).json({ success: false, error: "No image file provided" });
    }

    const model = genAi.getGenerativeModel({ model: "gemini-1.5-pro" }); // Use the correct model name

    // Prepare prompt and image data
    const prompt = "explain this blood report to a normal person who dont much medical knowdged and suggest them what need to do";
    const image = {
      inlineData: {
        data: req.file.buffer.toString("base64"),
        mimeType: req.file.mimetype,
      },
    };

    // Generate content using Generative AI
    const result = await model.generateContent([prompt, image]);
    const text = await result.response.text();

    // Send response
    res.json({ success: true, text });
  } catch (error) {
    console.error('Error generating content:', error);
    res.status(500).json({ success: false, error: "Failed to generate content" });
  }
}
