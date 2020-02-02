const express = require("express")
const home = express.Router()

home.get("/index",(req,res)=>{
    res.send("这是home页面")
})

module.exports = home