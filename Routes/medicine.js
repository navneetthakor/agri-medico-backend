// to use the express 
const express = require('express');
const router = express.Router();

// to validate the given parameter in request 
const {body} = require('express-validator');

// to authorize the medicine addition, updation and deletion
const admin = require('../middlewares/fetchAdmin');

// to upload images 
const upload = require('../Middelwares/fetchImages.js');

// importing controllers
const addMedicine = require('../Controllers/medicine/addMedicine.js');
const viewMedicine = require('../Controllers/medicine/viewMedicine.js');
const viewSpecificMedicines = require('../Controllers/medicine/viewSpecificMedicines.js');
// const updateMedicine = require('../Controllers/medicine/updateMedicine.js');
// const deleteMedicine = require('../Controllers/medicine/deleteMedicine.js');


// --------------------------ROUTE:1 Add medicine ----------------------------------------------------------
router.post('/addmedicine',
upload.single('image'),
[
    body("name", "please enter medicine name.").not().isEmpty(),
    body("description", "please enter medicine description.").not().isEmpty(),
    body("url", "please enter url").isArray().withMessage("Medicine urls to be provided in an array format"),
],
addMedicine);

// --------------------------ROUTE:2 Fetch medicines ----------------------------------------------------------
router.post('/getallmedicines',
viewMedicine);

// --------------------------ROUTE:3 Fetch medicine with their names ----------------------------------------------------------
router.post('/getmedicines',
[
    body("name", "please enter valid name").isArray().withMessage("Give array of names."),
],
viewSpecificMedicines);

module.exports = router