import express from 'express';
import { geminiText, generateContent } from '../controllers/Gemini.controller.js';
import multer from 'multer';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // Store the image in memory

// POST route for generating text
router.post('/generate-text', geminiText);

// POST route for Gemini Vision (image processing)
router.post('/analyze-image', upload.single('image'), generateContent); // Use multer to handle the file upload

export default router;
