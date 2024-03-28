const mongoose = require('mongoose')

async function connectToMongo(){
  await mongoose.connect('mongodb://localhost:27017/AgriMedico');
  console.log("Connection to database 'AgriMedico' is successful")
}

module.exports = connectToMongo