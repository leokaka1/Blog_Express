// 引入express框架
const express = require("express")
// 创建网站服务器
const app = express()

// 引入home
const home = require("./route/home")
// 引入admin
const admin = require("./route/admin")

app.use("/home",home)
app.use("/admin",admin)



// 监听3000端口
app.listen("3000",()=>{
    console.log("3000 port is listened!")
})