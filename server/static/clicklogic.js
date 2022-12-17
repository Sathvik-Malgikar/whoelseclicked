import { io } from "https://cdn.socket.io/4.5.4/socket.io.esm.min.js";
          
const socket = io();

let counter = document.getElementById("count")
function setcount(v){
    console.log(v);
    counter.textContent =v
 
} 


socket.on("countdata",(count)=>{
   
    setcount(count)
})

socket.once("welcome",(msg)=>{
    console.log("Recieved : " + msg)
})

socket.on("connect",()=>{
    console.log("connected from client side")
})

socket.on("error",()=>{
    console.log("error")
})


 function increment(){
    console.log("clicked!");
    //ting
    
    socket.emit("increment","")
}

document.getElementById("tapbell").addEventListener("click" , increment)
