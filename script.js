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
let num={
    num1:0,
    operator:'',
    num2:0
};
let i=1;
let operator = '';
const operators = ['+','-','x','/','=','clear']
const numeric_operators = ['+','-','x','/','=']
d=document.getElementById('disp');
buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(operators.indexOf(e.target.innerText)==-1){
            console.log(e.target)
            string += e.target.innerText;
            if(i==1){
                num.num1 = Number(string);
            }
            else if(i==2){
                num.num2 = Number(string);
                console.log(operate(num.operator,num.num1,num.num2));
            }
            else{
                num.num1=operate(num.operator,num.num1,num.num2);
                num.num2 = Number(string);
            }
            
            console.log(num.num1)
            console.log(num.num2)
            document.getElementById('disp').textContent = string;
        }
        if(numeric_operators.indexOf(e.target.innerText)!==-1){
            console.log(e.target)
            string = e.target.innerText;
            document.getElementById('disp').textContent = operate(num.operator,num.num1,num.num2);
            num.operator = string;
            
            string='';
            i++;
            
        }
    })
});