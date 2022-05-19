const express = require("express")
const app = express()
app.get("/",(req,res)=>{
    res.write("<h1> name is priyanka</h1>")
    res.write("<h1> name is priyanka sharma</h1>")
    res.write("<h1> name is priyanka d/o rajesh sharma</h1>")


})
app.get("/about",(req,res)=>{
    res.send("i am 21 year old");
})
app.get("/about/temp",(req,res)=>{
    res.send("computer science");
})

app.listen(8000,()=>{
    console.log("listing");
})