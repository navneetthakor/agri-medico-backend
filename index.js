const express = require('express')
const cors= require('cors')
const path=require('path')

const connectToMongo = require('./models/db.js')

const app = express()
const port = 3001

connectToMongo().catch(err => console.log(err))

app.use(cors())
app.use(express.json())


app.listen(port, ()=>{
    console.log(`Backend listening on : http://localhost:${port}`)
})