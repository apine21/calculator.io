let result = document.querySelector("#result");
let buttons = document.querySelector(".keys");
buttons.addEventListener('click', (event) => {
    if(event.target.matches('input') ){
       
        if (event.target.value == "."){
            result.value += event.target.value
        }
        else if(result.value == "0")
        result.value = event.target.value;
        else{
            if(result.value.length < 10) {
                result.value += event.target.value;
            }
        }
           
    }
}

);






function allClear() {
    result.value = '0';
}
function plusMinus() {
   
    result.value*= -1;
}

function equal() {
    if(eval(result.value) == "Infinity" || eval(result.value) == "-Infinity" ) {
        result.value = 'Error';
        setTimeout(() => {
            result.value = '0';    
        },1000)
    }
    else
    result.value = eval(result.value);
}


function sum() {

    result.value += '+';
}

function mince() {
    
    result.value += '-';
}

function multi() {
    
    result.value += '*';
}

function division() {
    
    result.value += '/';
}
setInterval(()=> {
    let time = document.querySelector('#time');
    time.innerHTML = ` ${(new Date().getHours() < 10) ? `0${new Date().getHours()}`: `${new Date().getHours()}` }:${(new Date().getMinutes() < 10) ? `0${new Date().getMinutes()}`: `${new Date().getMinutes()}` }`
},1000)