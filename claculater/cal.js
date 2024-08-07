let inputbox = document.getElementById('inputbox');
let button  = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML === "="){
            string = eval(string);
            inputbox.value = string;
        }
        else if(e.target.innerHTML ==='AC'){
            string = "";
            inputbox.value =string;
        }
        else if(e.target.innerHTML === 'DEL'){
            string =string.substring(0 , string.length-1);
            inputbox.value =string;
        }
        else{
            string +=e.target.innerHTML;
            inputbox.value = string;
        }


    })
})