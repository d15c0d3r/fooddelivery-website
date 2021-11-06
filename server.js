require("dotenv").config()

const express = require("express")
const cors = require("cors")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const app = express()
const db = require("./db")

app.use(cors())
app.use(express.json())

app.post("/login", async(req, res) => {
    console.log(req.body)
    db.query(`SELECT * FROM users WHERE email = ?`,[req.body.email],(err,result)=>{
        if(err){
            console.log(err)
            return res.send("error")
        }
        const user = result[0]
        console.log(user)
        if(!user) return res.send("no user found")
        bcrypt.compare(user.password,req.body.password,(err,passed)=>{
            if(err){
                console.log(err)
                return res.send("error")
            }
            const token = jwt.sign({email : req.body.email},process.env.JWT_SECRET)
            return res.send({token, email : req.body.email})
        })
    })
})

app.post("/signup",async(req,res)=>{
    console.log(req.body)
    bcrypt.hash(req.body.password, 10, (err, hashedpass)=>{
        if(err){
            console.log(err)
            return res.send("error")
        }
        const user = {
            email : req.body.email,
            password : hashedpass
        }
        db.query(`INSERT INTO users SET ? ;`, user, (err,result)=>{
            if(err){
                console.log(err)
                return res.send("error")
            }
            console.log(result)
            return res.send("signed up")
            })
        })
})

app.post("/forgotpass",async(req,res)=>{
    console.log(req.body)
    return res.send("password")
})

app.post("/is-authenticated",async(req,res)=>{
    console.log(req.body)
    if(req.body.token){
        jwt.verify(req.body.token, process.env.JWT_SECRET, (err, data) => {
            console.log(data)
        })
        return res.send(true)
    }
    return res.send(false)
})

app.listen(4000, () => {
    console.log("Started on port 4000")
})