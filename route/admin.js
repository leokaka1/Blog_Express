const express = require("express")
const admin = express.Router()

admin.get("/index",(req,res)=>{
    res.send("这是admin页面")
})

module.exports = admin