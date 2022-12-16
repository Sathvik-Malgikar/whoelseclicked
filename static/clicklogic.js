
var socket = io()

let counter = document.getElementById("count")
function setcount(v){
    console.log(v);
    counter.textContent =v
 
} 

socket.on("countdata",(count)=>{
   
    setcount(count)
})

socket.on("welcome",(msg)=>{
    console.log("Recieved : " + msg)
})

socket.on("connect",()=>{
    console.log("connected from client side")
})

function increment(){
    console.log("clicked!");
    //ting
    socket.emit("increment")
}

