var block = document.getElementById("block");
let game = document.getElementById("game");
var character = document.getElementById("character");
var counter = 0


block.addEventListener('animationiteration',()=>{
    var right =[0,150,300];
    var random =  (Math.floor(Math.random()*3));
block.style.left = (right[random] )+ "px";
counter++;


})
function moveLeft(){
    let left =
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left = left - 150;
    if(left>=0){
    character.style.left = left + "px";
    }
}
function moveRight(){
 let left=
 parseInt (window.getComputedStyle(character).getPropertyValue("left"));
left = left + 150;
if(left<450){
character.style.left = left + "px";
}
}
document.addEventListener("keydown",(event)=>{
    if(event.key==="ArrowLeft"){moveLeft()};
    if(event.key==="ArrowRight"){moveRight()}
})

let gameInterval=setInterval(function(){
    var characterleft =
    parseInt(getComputedStyle(character).getPropertyValue("left"));
    var blockleft =
    parseInt(getComputedStyle(block).getPropertyValue("left"));
    var blocktop =
    parseInt(getComputedStyle(block).getPropertyValue("top"));
    if(characterleft== blockleft&& blocktop<550&&blocktop>270){
        alert("GAME OVER.score:"+counter);
        block.style.animation ="none";
        clearInterval(gameInterval);

    }
},20);