const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    
    username:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: true,
    },
    
    contact_num:{
        type: String,
        // required: true, (we can't force for mobile number)
    },

    image:{
        type: String
    },

    country:{
        type: String,
        required: true,
    },

    state:{
        type: String,
        required: true,
    },

    city:{
        type: String,
        required: true,
    },


    date:{
        type: Date,
        default: Date.now 
    }

})

const User = mongoose.model('user', UserSchema)

module.exports = User