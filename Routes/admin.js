// to use the express 
const express = require('express');
const router = express.Router();

// to validate the given parameter in request 
const {body} = require('express-validator');

// to upload images 
const upload = require('../Middelwares/fetchImages.js');

// importing middleware 
const fetchAdmin = require('../Middelwares/fetchAdmin.js');

// importing controllers
const createAdmin = require('../Controllers/admin/createAdmin.js');


// --------------------------ROUTE:1 create user account ----------------------------------------------------------
router.post('/createAdmin',
upload.single('image'),
[
    body("name", "please enter name").not().isEmpty(),
    body("email", "please enter valid email").isEmail(),
    body("password", "please enter password with minimum length of : 6").isLength({min:6})
],
createAdmin);


module.exports = router;