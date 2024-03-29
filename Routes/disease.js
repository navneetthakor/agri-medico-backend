// to use the express 
const express = require('express');
const router = express.Router();

// to validate the given parameter in request 
const {body} = require('express-validator');

// to authorize the medicine addition, updation and deletion
const fetchAdmin = require('../Middelwares/fetchAdmin.js');

// to upload images 
const upload = require('../Middelwares/fetchImages.js');

// importing controllers
const addDisease = require('../Controllers/disease/addDisease.js');
const viewDisease = require('../Controllers/disease/viewDisease.js');
const viewSpecificDisease = require('../Controllers/disease/viewSpecificDisease.js');
const updateDisease = require('../Controllers/disease/updateDisease.js');
const deleteDisease = require('../Controllers/disease/deleteDisease.js');


// --------------------------ROUTE:1 Add medicine ----------------------------------------------------------
router.post('/adddisease',
fetchAdmin,
upload.single('image'),
[
    body("name", "please enter medicine name.").not().isEmpty(),
    body("description", "please enter medicine description.").not().isEmpty(),
    body("medicine_name", "please enter medicine names").isArray().withMessage("Medicine urls to be provided in an array format"),
],
addDisease);

// --------------------------ROUTE:2 Fetch medicines ----------------------------------------------------------
router.get('/getalldiseases',
fetchAdmin,
viewDisease);

// --------------------------ROUTE:3 Fetch medicine with their names ----------------------------------------------------------
router.post('/getdisease',
[
    body("name", "please enter valid name").isArray().withMessage("Give array of names."),
],
viewSpecificDisease);

// --------------------------ROUTE:4 Delete medicine ----------------------------------------------------------
router.get('/deletedisease/:id',
fetchAdmin,
deleteDisease);

// --------------------------ROUTE:5 Update medicine ----------------------------------------------------------
router.put('/updatedisease/:id',
fetchAdmin,
upload.single('image'),
[
    body("name", "please enter medicine name.").not().isEmpty(),
    body("description", "please enter medicine description.").not().isEmpty(),
    body("medicine_name", "please enter medicine names").isArray().withMessage("Medicine urls to be provided in an array format"),
],
updateDisease);

module.exports = router;