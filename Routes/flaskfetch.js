// to use the express 
const express = require('express');
const router = express.Router();

// to upload images 
const upload = require('../Middelwares/fetchImages.js');

// to send image to flask
const fs = require('fs');

// --------------------------ROUTE:1 Fetch disease name from flask server -------------------------------------------------------

router.post('/fetchdiseasename', async (req, res) => {
    try {
        const imgBuffer = fs.readFileSync(req.file.path)
        const response = await fetch('http://127.0.0.1:5000/classify', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: imgBuffer,
        })

        const json = await response.json()
        return res.status(200).json({"disease":json.disease_name})

    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "some error occured", signal: 'red' });
    }
})