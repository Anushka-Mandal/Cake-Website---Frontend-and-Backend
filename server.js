import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import Detail from './Detail.js'; // Import Detail model
import Contact from './contactus.js'; // Import Contact model

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// MongoDB connection
mongoose
    .connect('mongodb://localhost:27017/dessertopia', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to Dessertopia API!');
});

// POST API to save form details
app.post('/api/details', async (req, res) => {
    try {
        const { name, email, phone, address, message, paymentMethod, cartItems } = req.body;

        if (!name || !email || !phone || !address || !message || !paymentMethod || !cartItems) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newDetail = new Detail({ name, email, phone, address, message, paymentMethod, cartItems });
        await newDetail.save();

        res.status(201).json({ message: 'Detail saved successfully!' });
    } catch (error) {
        console.error('Error saving detail:', error.message);
        res.status(500).json({ message: 'Error saving detail', error: error.message });
    }
});

// POST API to save contact form details (contactus.js)
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Validate the request body
        if (!name || !email || !phone || !message) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Save the contact data to the database
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();

        res.status(201).json({ message: 'Contact saved successfully!' });
    } catch (error) {
        console.error('Error saving contact:', error.message);
        res.status(500).json({ message: 'Error saving contact', error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
