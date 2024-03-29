const mongoose = require('mongoose')
const {Schema} = mongoose

const UserHistorySchema = new Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    search_history:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'disease'
    }],

    date:{
        type: Date,
        default: Date.now 
    }
})

const UserHistory = mongoose.model('userhistory', UserHistorySchema)

module.exports = UserHistory;