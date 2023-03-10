var express = require("express")
var app = express()
var server = require("http").Server(app)
var iomodule = require("socket.io")(server)
var mongoose = require("mongoose")
var path = require("path")

mongoose.connect("mongodb+srv://mongoadmin:mongoadmin@cluster0.exxx1cv.mongodb.net/sathvik?retryWrites=true&w=majority")
mongoose.set('strictQuery', false)

mongoose.connection.once("open",()=>{
    console.log("\n\nDatabase connected\n\n");
    startserver()
    socketsinit()
})
.on("error",()=>{
    console.log("db error :(");
})

function socketsinit()
{
    var count =100;

    iomodule.on("connection",(socket)=>{
        console.log("user got connected!");
        iomodule.emit("countdata", count)

        socket.once("disconnect" , ()=>{
            socket.removeAllListeners()
                    console.log("disconnected!");
                })

        socket.on("increment",()=>{
        count++;
        console.log("count after incrementing ", count );
        iomodule.emit("countdata", count)
        })
    })
    // iomodule.on("connection",(socket)=>{
    //     console.log("user got connected!");
    //     socket.emit("welcome", "sathvik !")


    //     socket.on("disconnect" , ()=>{
    //         console.log("disconnected!");
    //     })

    // })


    
}


function startserver()
{
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


server.listen(process.env.PORT || 9000 , ()=>{console.log(`listening on port ${process.env.PORT || 9000} ...`)})

}
// console.log("this is how it works!")

