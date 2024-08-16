
---

# Gemini Vision API Integration in Node.js/Express

This Node.js/Express.js project is a RESTful API that integrates with the **Gemini 1.5 Flash** API for text generation and the **Gemini 1.5 Pro** API for image analysis. This project is designed to help users analyze and simplify blood test reports through the use of advanced AI models.

## Features

- **Text Generation:** Generate concise and informative text summaries or descriptions using the Gemini 1.5 Flash API.
- **Image Analysis:** Analyze images and extract relevant information, such as identifying key components of a blood test report, using the Gemini 1.5 Pro API.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/AI-Text---File-analyzer.git
   ```

2. Navigate to the project directory:

   ```bash
   cd AI-Text---File-analyzer
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file and add your Gemini API keys:

   ```bash
   GOOGLE_API_KEY=your_Gemini_api_key
   PORT=your_PORT
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The server will start at `http://localhost:3000"`.

## API Endpoints

### 1. Generate Text

**Endpoint:** `POST /api/generate-text`

This endpoint generates text based on your custom prompt.

**Example Request:**

```bash
curl -X POST http://localhost:3000/api/generate-text \
-H "Content-Type: application/json" \
-d '{
  "prompt": "Summarize the blood test report.",
}'
```

**Custom Prompt:**
- You can modify the `prompt` parameter to specify your own text generation needs. For example, if you need a summary or specific insights, adjust the prompt accordingly.

**Response:**

```json
{
  "generatedText": "This blood test report indicates a healthy range of values for most parameters, except for elevated cholesterol levels."
}
```

### 2. Analyze Image

**Endpoint:** `POST /api/analyze-image`

This endpoint analyzes an image and returns relevant data, such as text or objects found within the image.

**Example Request:**

```bash
curl -X POST http://localhost:3000/api/analyze-image \
-H "Content-Type: multipart/form-data" \
-F "image=@/path/to/your/image.png"
```

**Response:**

```json
{
  "analysisResult": "The image contains text related to blood sugar levels and a graph indicating glucose fluctuations."
}
```

## How It Works

- **Gemini 1.5 Flash API for Text Generation:** The `generate-text` endpoint uses the Gemini 1.5 Flash API to generate text based on your input prompt. You can modify the prompt to customize the output for your specific needs, such as generating summaries, explanations, or instructions.
  
- **Gemini 1.5 Pro API for Image Analysis:** The `analyze-image` endpoint processes images using the Gemini 1.5 Pro API, which analyzes the content of the image and extracts relevant information. This is particularly useful for analyzing images of blood test reports or other medical documents.

## Customization

You can adjust the prompts in the API requests to suit your specific needs. For example:
- **Text Generation:** If you're generating medical explanations, you can modify the `prompt` to ask for more detailed or simplified explanations depending on the user's expertise.
- **Image Analysis:** The image analysis API allows you to specify the type of information you're interested in, such as text extraction or object detection.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

This README should give potential users and contributors a clear understanding of your project and how to use it effectively. You can customize it further to fit your specific project setup or add more details as needed.
