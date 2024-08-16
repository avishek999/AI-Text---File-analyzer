import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro", // Use the correct model name
});

const prompt = "what you see in this img";
const image = {
  inlineData: {
    data: Buffer.from(fs.readFileSync('GokumangaToriyama.png')).toString("base64"),
    mimeType: "image/png", // Correct MIME type key
  },
};

try {
  const result = await model.generateContent([prompt, image]);
  console.log(result.response.text());
} catch (error) {
  console.error('Error generating content:', error);
}
