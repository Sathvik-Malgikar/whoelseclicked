import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
          
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

socket.once("connect",()=>{
    console.log("connected from client side")
})


 function increment(){
    console.log("clicked!");
    //ting
    
    socket.emit("increment","")
}

document.getElementById("tapbell").addEventListener("click" , increment)
