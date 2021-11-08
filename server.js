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
    db.query(`SELECT * FROM users WHERE email = ?`,[req.body.email],(err,result)=>{
        if(err){
            return res.send("error")
        }
        const user = result[0]
        if(!user) return res.send("nouserfound")
        console.log(user.password)
        
        bcrypt.compare(user.password,req.body.password,(err,passed)=>{
            if(err) return res.send("error")
            if(passed){
                const token = jwt.sign({email : req.body.email},process.env.JWT_SECRET)
                return res.send({token, email : req.body.email})
            } else return res.send("wrongpassword")
        })
    })
})

app.post("/signup", async(req,res)=>{
    bcrypt.hash(req.body.password, 10, (err, hashedpass)=>{
        if(err){
            return res.send("error")
        }
        const user = {
            email : req.body.email,
            password : hashedpass
        }
        db.query(`INSERT INTO users SET ? ;`, user, (err,result)=>{
            if(err){
                if(err.code === "ER_DUP_ENTRY") return res.send("userexists")
                return res.send("error")
            }
            return res.send("signedup")
            })
        })
})

app.post("/forgotpass", async(req,res)=>{
    return res.send("password")
})

app.get("/isLoggedIn", async(req,res)=>{
    if(req.query.token){
        jwt.verify(req.query.token, process.env.JWT_SECRET, (err, data) => {
            // console.log(data)
        })
        return res.send(true)
    }
    return res.send(false)
})

app.listen(4000, () => {
    console.log("Started on port 4000")
})