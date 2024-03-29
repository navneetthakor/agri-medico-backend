// to connect with medicine Collection 
const Medicine = require('../../Model/Medicine.js');

// to validate body params 
const {validationResult} = require('express-validator');

const viewSpecificMedicines = async(req,res) =>{
    try{
        
        const err =  validationResult(req);
        if(!err.isEmpty()){
            // delete uploaded file 
            return res.status(400).json({error: err.array(), signal: "red"})
        }
        
        console.log("req.name is : ", req.body.name)

        const medicines = await Medicine.find({ name: { $in: req.body.name }});

        if(!medicines){
            return res.status(400).json({error: "No medicines."})
        }

        return res.status(200).json(medicines)
        
    }catch(e){
        console.log(e);
        res.status(500).json({error: "some error occured", signal: 'red'});
    }
};

module.exports = viewSpecificMedicines;