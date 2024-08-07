let block = document.querySelector("#block");
var character = document.querySelector("#character");
var jumping = 0;
var counter = 0;

block.addEventListener('animationiteration', () => {
    let arrayy = [400,420]
    var random =  (Math.floor(Math.random()*2));
   
    let top =block.style.top = arrayy[random] + "px";
    console.log(top)
});

function jump(){
    if(character.classList !="animation"){
    character.classList.add("animation");

}

    
    setTimeout(function(){
        character.classList.remove("animation")
    },500)
}

var checkDead =setInterval(function(){
    var charactertop =
    parseInt(Window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    perseInt(Window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<30&&blockLeft>0 && charactertop>340){
        alert("GAME OVER ")
    }

},10)  