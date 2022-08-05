const express = require('express')


const Checking = require("./Routes/Checking")//importing


const app = express();
app.use(express.json())


app.get("/",(req,res)=>{
res.send("hello all")
})

app.use("/auth",Checking)// linking child with parent

app.listen(5000, ()=>{
    console.log("server is running");
})