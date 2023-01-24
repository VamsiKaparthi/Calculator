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
d=document.getElementById('disp');
function display(m){
    d.textContent = `${m}`;
}
buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click',()=>display(button.id));
});