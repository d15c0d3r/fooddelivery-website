require("dotenv").config();

const express = require("express")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const app = express();
const db = require("./db");

app.use(cors())
app.use(express.json());

app.post("/login", async(req, res) => {
    console.log(req.body)
    return res.send("logged in")
});

app.post("/signup",async(req,res)=>{
    console.log(req.body)
    return res.send("signed up")
})

app.post("/forgotpass",async(req,res)=>{
    console.log(req.body)
    return res.send("password")
})

app.get("/isLoggedIn",async(req,res)=>{

})

app.listen(4000, () => {
    console.log("Started on port 4000");
});