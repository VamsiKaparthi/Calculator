function add(a,b){
    return(a+b);
}
function subtract(a,b){
    return(a-b);
}
function multiply(a,b){
    return(a*b);
}
function divide(a,b){
    return(a/b);
}

function operate(operator,a,b){
    if(operator=='+'){
        return add(a,b);
    }
    if(operator=='-'){
        return subtract(a,b);
    }
    if(operator=='x'){
        return multiply(a,b);
    }
    if(operator=='/'){
        return divide(a,b);
    }
}
let string = '';
d=document.getElementById('disp');
buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        console.log(e.target)
        string += e.target.innerText;
        document.getElementById('disp').textContent = string;
    })
});