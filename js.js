let firstNumber = 0;
let secondNumber = 0;
let operator;

function reset(){
    secondNumber = 0;
    operator = undefined;
}

function reset(){
    firstNumber = 0;
    reset();
}
function add(firstNumber,secondNumber){
    let result = firstNumber+secondNumber;
    reset();
    return result;
}

function subtract(firstNumber,secondNumber){
    let result = firstNumber-secondNumber;
    reset();
    return result;
}

function multiply(firstNumber,secondNumber){
    let result = firstNumber*secondNumber;
    reset();
    return result;
}

function divide(firstNumber,secondNumber){
    let result = firstNumber / secondNumber;
    reset();
    return result;
}

function numberBtn(number){
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

function operatorBtn(operation){
    return operator = operation;
}

function operateFunction(firstNumber,secondNumber,operator){
    switch(operator){
        case 'add':
            return firstNumber= add(firstNumber,secondNumber);
            break;
        case 'subtract':
            return firstNumber= subtract(firstNumber,secondNumber);
            break;
        case 'multiply':
            return firstNumber= multiply(firstNumber,secondNumber);
            break;
        case 'divide':
            return firstNumber= divide(firstNumber,secondNumber);
            break;
        case '':
            alert('please input numbers and operator(+,-,*,/)');
            break;
        default:
            alert('please select one and only one operator');
            break;
    }
}
console.log(firstNumber)
// console.log(operateFunction(6,,''));
// ^test line