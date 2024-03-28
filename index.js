// ------------------ dotenv setup (to use environment variables) ---------
const setupDotEnv = require("./setupenv.js");
setupDotEnv();


// ------------------ to connect with mongoDB -----------------------------
const connectToMongo = require("./db.js");
connectToMongo();


// /------------------------- importing required modules----------------------
const express = require('express')
const app = express()
const cors= require('cors')
const path=require('path')
const port = process.env.PORT || 5001;


// --------------------------- Middleware setup ----------------------------
// to enable cross origin resource sharing
app.use(cors());

// to parse the body of request (specifically for post requests)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// making upload/ folder public so that frontend can fetch static files like images
app.use("/public", express.static(path.join(__dirname, "public")));


// --------------------------- Routing setup -------------------------------
// importing routes files

// placing middlewares




// default routes

app.get("/", (req, res) => res.json({ signal: "green" }));

// -------------------------- Starting backend -----------------------------
app.listen(port, () => {
  console.log("backend is listening at port no : ", port);
});