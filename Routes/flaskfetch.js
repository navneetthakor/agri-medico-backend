// to use the express 
const express = require('express');
const router = express.Router();

// to upload images 
const upload = require('../Middelwares/fetchImages.js');

// to communicate with ML model
const axios = require('axios');

// --------------------------ROUTE:1 Fetch disease name from flask server -------------------------------------------------------

router.post('/fetchdiseasename', upload.single('image'),  async (req, res) => {
    try {
        
        // creating formData object 
        const formData = new FormData();
        formData.append('image',req.file);

        // const url = `${process.env.MODEL_URL}/`;
        const url = 'http://127.0.0.1:5000/classify'
        const body = {
            formData
        }
        const response = await axios.post(url,body);
        const data = response.data;
        console.log(data)
        return res.status(200).json({ "disease": data, signal: "green" })

    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "some error occured", signal: 'red' });
    }
})

module.exports = router