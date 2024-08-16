import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import geminiRoutes from './Routes/Gemini.route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); // Parse JSON bodies

// Use the gemini routes
app.use('/api', geminiRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
