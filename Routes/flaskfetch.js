// to use the express 
const express = require('express');
const router = express.Router();

// to upload images 
const upload = require('../Middelwares/fetchImages.js');

// to send image to flask
const fs = require('fs');

// --------------------------ROUTE:1 Fetch disease name from flask server -------------------------------------------------------

router.post('/fetchdiseasename', upload.single('image'),  async (req, res) => {
    try {
        const formData = new FormData();
        const response = await fetch('http://127.0.0.1:5000/classify', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        })

        const json = await response.json()
        console.log(json)
        return res.status(200).json({ "disease": json })

    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "some error occured", signal: 'red' });
    }
})

module.exports = router