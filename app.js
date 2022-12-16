const express = require("express")
const app = express()
// const io = require("socket.io")(app)
const mongoose = require("mongoose")
const path = require("path")

mongoose.connect("mongodb+srv://mongoadmin:mongoadmin@cluster0.exxx1cv.mongodb.net/sathvik?retryWrites=true&w=majority")

mongoose.connection.on("open",()=>{
    console.log("Database connected");
}).on("error",()=>{
    console.log("db error :(");
})

app.use(express.static( path.join(__dirname , "static")))


app.get("/about",(req,resp)=>{
    resp.sendFile("about.html" , {root : path.join(__dirname , "static") })
})

app.get("/",(req,resp)=>{
    resp.sendFile("index.html" , {root : path.join(__dirname , "static")})
})


app.use((req,resp)=>{
    resp.send("your requested url is incorrect !")
})


app.listen(process.env.PORT || 3000 , ()=>{console.log(`listening on port ${process.env.PORT || 3000} ...`)})

// console.log("this is how it works!")

