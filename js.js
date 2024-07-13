let firstNumber;
let secondNumber ;
let operator;

function add(firstNumber,secondNumber){
    return firstNumber+secondNumber
}

function subtract(firstNumber,secondNumber){
    return firstNumber-secondNumber
}

function multiply(firstNumber,secondNumber){
    return firstNumber*secondNumber
}

function divide(firstNumber,secondNumber){
    return firstNumber / secondNumber
}

function operateFunction(firstNumber,secondNumber,operator){
    switch(operator){
        case 'add':
            return add(firstNumber,secondNumber);
            break;
        case 'subtract':
            return subtract(firstNumber,secondNumber);
            break;
        case 'multiply':
            return multiply(firstNumber,secondNumber);
            break;
        case 'divide':
            return divide(firstNumber,secondNumber);
            break;
        case '':
            alert('please input numbers and operator(+,-,*,/)');
            break;
        default:
            alert('please select one and only one operator');
            break;
    }
}

// console.log(operateFunction(6,,''));
// ^test line