let firstNum = 0;
let secondNum =0;
let result = 0;

firstNum = 10;
secondNum = 3;

console.log("firstNum : ",firstNum);
console.log("secondNum: ",secondNum);

console.log(firstNum + " + " + secondNum + " = " + numPlus(firstNum, secondNum));
console.log(firstNum + " - " + secondNum + " = " + numMinus(firstNum, secondNum));
console.log(firstNum + " * " + secondNum + " = " + numMultiple(firstNum, secondNum));
console.log(firstNum + " / " + secondNum + " = " + numDivide(firstNum, secondNum));
console.log(firstNum + " % " + secondNum + " = " + restOfNum(firstNum, secondNum));



function numPlus(num1, num2){
    return num1 + num2;
}

function numMinus(num1, num2){
    return num1 - num2;
}

function numMultiple(num1, num2){
    return num1 * num2;
}

function numDivide(num1, num2){
    return num1 / num2;
}

function restOfNum(num1,num2){
    return num1 /((num1 / num2) * num2);
}