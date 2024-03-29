// to use express 
const express = require('express');
const router = express.Router();

// to define validation for body parameters 
const {body} = require('express-validator');

// importing controllers
const addToUserHistory = require('../Controllers/userHistory/addToUserHistory.js');


// --------------------------ROUTE:1 to push data in userHistory ----------------------------------------------------------
router.put('/addToUserHistor',
[
    body('user_id', "please provide valid user id").not().isEmpty(),
    body('disease_id', "please provide valid disease id").not().isEmpty(),
],
addToUserHistory);

module.exports = router;