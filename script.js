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
let j=1;
let operator = '';
let check = true;
const operators = ['+','-','x','/','=','AC','↺']
const numbers = ['1','2','3','4','5','6','7','8','9','0']
const numeric_operators = ['+','-','x','/']
d=document.getElementById('disp');
buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(operators.indexOf(e.target.innerText)==-1||e.target.innerText=='↺'){
            if(e.target.innerText=='↺'){
                string = string.slice(0,-1);
            }
            else{
                if(e.target.innerText=='.'){
                    if(check==true){
                        string+=e.target.innerText
                        check=false;
                    }
                }
                else{
                    string += e.target.innerText;
                }
                
            }
            document.getElementById('disp').textContent = string;
            
            console.log(num.num1);
            console.log(num.num2);
        }
        else if(numeric_operators.indexOf(e.target.innerText)!==-1){
            check=true;
            if(i==1){
                num.num1=Number(string);
            }
            else{
                num.num2=Number(string);
                num.num1 = operate(num.operator,num.num1,num.num2)
            }
            num.operator = e.target.innerText;
            i++;
            if(i>2){
                document.getElementById('disp').textContent = Number(num.num1).toFixed(3);
            }
            string='';
        }
        else if(e.target.innerText=='='){
            if(i==1){
                num.num1=Number(string);
            }
            else{
                num.num2=Number(string);
                num.num1 = operate(num.operator,num.num1,num.num2)
            }
            string=''
            document.getElementById('disp').textContent = Number(num.num1).toFixed(3);
            
        }
        if(e.target.innerText=='AC'){
            i=1;
            num.num1=0;
            num.num2=0;
            operator='';
            string='';
            check = true;
            document.getElementById('disp').textContent=string;
        }
    })
    button.addEventListener('keydown',(e)=>{
        console.log(e)
        if((numbers.indexOf(e.key)==1)||(e.key==='Backspace')||(e.key=='.')){
            if(e.key==='Backspace'){
                string = string.slice(0,-1);
            }
            else{
                if(e.key==='.'){
                    if(check==true){
                        string+=e.key
                        check=false;
                    }
                }
                else{
                    string += e.key;
                }    
            }
            document.getElementById('disp').textContent = string;
            console.log(num.num1);
            console.log(num.num2);
        }
        else if(numeric_operators.indexOf(e.key)==1){
            check=true;
            if(i==1){
                num.num1=Number(string);
            }
            else{
                
                num.num2=Number(string);
                num.num1 = operate(num.operator,num.num1,num.num2)    
            }
            num.operator = e.shiftKey;
            i++;
            if(i>2){
                document.getElementById('disp').textContent = Number(num.num1).toFixed(3);
            }
        }
        else if(e.key=='=' || (e.key=='Enter')){
            if(i==1){
                num.num1=Number(string);
            }
            else{
                num.num2=Number(string);
                num.num1 = operate(num.operator,num.num1,num.num2)
            }
            document.getElementById('disp').textContent = Number(num.num1).toFixed(3);
        }
    })
});