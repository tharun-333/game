var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping =0;
var counter =0;


hole.addEventListener('animationiteration',()=>{
    var random = Math.random()*3;
    var top = (random*100)+150;
    hole.style.top = -(top) +"px";
    counter++;


});
setInterval(function(){
    var charactertop =
    parseInt(getComputedStyle(character).getPropertyValue("top"));
    if(jumping===0){
    character.style.top = (charactertop+2)+"px";
}

var blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
var holetop = parseInt(getComputedStyle(hole).getPropertyValue("top"));
var charactertop =
    parseInt(getComputedStyle(character).getPropertyValue("top"));
var ctop = -(500-charactertop);
if((charactertop>480) || ((blockLeft<20) && (blockLeft>-50) && ((ctop<holetop)||(ctop>holetop+130)))){
    alert("GAME OVER .  YOUR SCORE IS: " +counter);
    character.style.top = 100 + "px";
    counter =0;

}
},10);
function jump (){
    jumping= 1;
    let jumpcount =0;
    var jumpInterval = setInterval(function(){
    
         var charactertop =
        parseInt(getComputedStyle(character).getPropertyValue("top"));
        if((charactertop>6) && (jumpcount>15)){
    character.style.top = (charactertop-7)+"px";
        }
        if(jumpcount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpcount=0;
        }
        jumpcount++;

    },10)

}