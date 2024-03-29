// to use the express 
const express = require('express');
const router = express.Router();

// to validate the given parameter in request 
const {body} = require('express-validator');

// to upload images 
const upload = require('../middlewares/fetchImages');

// importing controllers
const createUser = require('../Controllers/user/createUser.js');


// --------------------------ROUTE:1 create user account ----------------------------------------------------------
router.post('/createuser',
upload.single('image'),
[
    body("username", "please enter name").not().isEmpty(),
    body("country", "please enter country").not().isEmpty(),
    body("state", "please enter state").not().isEmpty(),
    body("city", "please enter city").not().isEmpty(),
    body("email", "please enter valid email").isEmail(),
    body("password", "please enter password with minimum length of : 6").isLength({min:6})
],
createUser);