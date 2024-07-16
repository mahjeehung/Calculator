let firstNumber = 0;
let secondNumber = 0;
let operator;

function reset(){
    secondNumber = 0;
    operator = undefined;
}

function clear(){
    firstNumber = 0;
    reset();
}

function add(firstNumber,secondNumber){
    let result = Number(firstNumber)+Number(secondNumber);
    reset();
    return result;
}

function subtract(firstNumber,secondNumber){
    let result = Number(firstNumber)-Number(secondNumber);
    reset();
    return result;
}

function multiply(firstNumber,secondNumber){
    let result = Number(firstNumber)*Number(secondNumber);
    reset();
    return result;
}

function divide(firstNumber,secondNumber){
    let result = Number(firstNumber) / Number(secondNumber);
    reset();
    return result;
}

function numberInput(number){
    if (operator != undefined && secondNumber ==0){
        return secondNumber = `${number}`;
    } else if (operator != undefined && secondNumber !=0){
        return secondNumber += `${number}`;
    } else if (firstNumber == 0){
        return firstNumber = `${number}`;
    } else {
        return firstNumber += `${number}`;
}
}

function operateFunction(firstNumber,secondNumber,operator){
    console.log('not on page load');
    switch(operator){
        case '+':
            return firstNumber= add(firstNumber,secondNumber);
            break;
        case '-':
            return firstNumber= subtract(firstNumber,secondNumber);
            break;
        case '*':
            return firstNumber= multiply(firstNumber,secondNumber);
            break;
        case '/':
            return firstNumber= divide(firstNumber,secondNumber);
            break;
        case '':
            alert('please input numbers and operator(+,-,*,/)');
            break;
        // default:
        //     alert('please select one and only one operator');
        //     break;
    }
}

let numberBtnFx = function numberBtnFx(e){
    numberInput(`${e.target.textContent}`);
    console.log(firstNumber,secondNumber);
}

let operatorBtnFx = function operatorBtnFx(operation){
    operator = (`${operation.target.textContent}`);
    console.log(operator);
}

const numberButton = Array.from(document.getElementsByClassName("numberButton"));
const operationButton = Array.from(document.getElementsByClassName("operationButton"));
const equalButton = document.getElementById("equalButton");

for (let i = 0; i <numberButton.length; i++){
numberButton[i].addEventListener("click",numberBtnFx);
}

for (let i = 0; i <operationButton.length; i++){
operationButton[i].addEventListener("click",operatorBtnFx);
}

equalButton.addEventListener('click', function(){operateFunction(firstNumber,secondNumber,operator)});
// I need to fix this function to fire correctly 

// console.log(operateFunction(6,,''));
// ^test line