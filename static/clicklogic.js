
var socket = io()

counter = document.getElementById("count")
function setcount(v){
    counter.value =v
} 

socket.on("countdata",(args)=>{
    console.log(args);
    setcount(args)
})

function increment(){
    console.log("clicked!");
    //ting
    socket.emit("increment")
}

