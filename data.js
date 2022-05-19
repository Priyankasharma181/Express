const express = require("express")
const app = express()
const file = require("/home/priyanka/Desktop/Express_js/data.html")
app.get("/",(req,res)=>{
    res.send("file")
})
app.use("/file",file)


app.listen(3000,(req,res)=>{
    console.log("done");
})