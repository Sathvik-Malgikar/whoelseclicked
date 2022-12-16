
var socket = io()

counter = document.getElementById("count")
function setcount(v){
    counter.value =v
} 

socket.on("countdata",(count)=>{
    console.log(count);
    setcount(count)
})

function increment(){
    console.log("clicked!");
    //ting
    socket.emit("increment")
}

