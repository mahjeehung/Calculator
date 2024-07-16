let firstNumber = 0;
let secondNumber = 0;
let operator;
const display = document.getElementById("display");
const numberButton = Array.from(document.getElementsByClassName("numberButton"));
const operationButton = Array.from(document.getElementsByClassName("operationButton"));
const equalButton = document.getElementById("equalButton");
const clearButton = document.getElementById("clearButton");
// const dotButton = document.getElementById("dotButton");

function reset(){
    secondNumber = 0;
    operator = undefined;
}

function clear(){
    firstNumber = 0;
    reset();
    display.textContent = `${firstNumber}`;
}

function add(){
    firstNumber = Number(firstNumber)+Number(secondNumber);
    reset();
    return firstNumber;
}

function subtract(){
    let result = Number(firstNumber)-Number(secondNumber);
    reset();
    return result;
}

function multiply(){
    let result = Number(firstNumber)*Number(secondNumber);
    reset();
    return result;
}

function divide(){
    let result = Number(firstNumber) / Number(secondNumber);
    reset();
    return result;
}

function numberInput(number){
    if (operator != undefined && secondNumber ==0){
        secondNumber = `${number}`;
        display.textContent = `${secondNumber}`;
    } else if (operator != undefined && secondNumber !=0){
        secondNumber += `${number}`;
        display.textContent = `${secondNumber}`;
    } else if (firstNumber == 0){
        firstNumber = `${number}`;
        display.textContent = `${firstNumber}`;
    } else {
        firstNumber += `${number}`;
        display.textContent = `${firstNumber}`;
    }
}

function operateFunction(operator){
    console.log('not on page load');
    switch(operator){
        case '+':
            return firstNumber= add();
            break;
        case '-':
            return firstNumber= subtract();
            break;
        case '*':
            return firstNumber= multiply();
            break;
        case '/':
            return firstNumber= divide();
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
    display.textContent = `${operator}`
    console.log(operator);
}

for (let i = 0; i <numberButton.length; i++){
numberButton[i].addEventListener("click",numberBtnFx);
}

for (let i = 0; i <operationButton.length; i++){
operationButton[i].addEventListener("click",operatorBtnFx);
}

equalButton.addEventListener('click', function(){(operateFunction(operator))});
equalButton.addEventListener('click', function(){display.textContent =`${firstNumber}`});

clearButton.addEventListener('click', clear);
// console.log(operateFunction(6,,''));
// ^test line