const mongoose = require('mongoose')
const {Schema} = mongoose

const DiseaseSchema = new Schema({
    
    name:{
        type: String,
        required: true,
    },

    images:[{
        type: String
    }],

    description:{
        type: String,
        default: null,
    },

    medicine:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'medicine'
    },

    date:{
        type: Date,
        default: Date.now 
    }

})

const Disease = mongoose.model('disease', DiseaseSchema)

module.exports = Disease