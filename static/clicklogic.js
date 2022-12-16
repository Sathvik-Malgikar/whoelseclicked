
var socket = io()

socket.on("countdata",(args)=>{
    console.log(args);
})

function increment(){
    console.log("clicked!");
    //ting
    socket.emit("incrementdata",{"count" : 43})
}

