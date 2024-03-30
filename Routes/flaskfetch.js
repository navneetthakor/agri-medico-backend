// to use the express 
const express = require('express');
const router = express.Router();

// to upload images 
const upload = require('../Middelwares/fetchImages.js');

// to communicate with ML model
const axios = require('axios');
const FormData = require('form-data');

// to read file 
const fs = require('fs');
const path = require('path');

// --------------------------ROUTE:1 Fetch disease name from flask server -------------------------------------------------------

router.post('/fetchdiseasename', upload.single('file'),  async (req, res) => {
    try {
        // Ensure req.file contains the uploaded file details
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // Read the uploaded image file as binary data
        const imagePath = req.file.path;
        const imageBuffer = fs.readFileSync(imagePath);

        // Create a FormData object and append the image buffer with the key "image"
        const formData = new FormData();
        formData.append('image', imageBuffer, { filename: req.file.originalname });

        // Send the image data to Flask server
        const url = 'http://127.0.0.1:5000/classify';
        const response = await axios.post(url, formData, {
            headers: formData.getHeaders() // Set headers from FormData object
        });

        // Handle the response from Flask
        const predicted_class = response.data
        res.status(200).json({ predicted_class: predicted_class.class_name });
    } catch (error) {
        console.error('Error sending image to Flask:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

module.exports = router