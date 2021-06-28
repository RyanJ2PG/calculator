// create a function for creating buttons
// function for multiply, divide, add, and subtract
// each operator function MUST save the sum of the first two inputs as ---
// a variable and add each input after to that variable and save it again
// create a function that takes an operator and 2 numbers and calls the function on those nums
let btnContainer = document.querySelector('#btnContainer');
console.log(btnContainer);
let num1 = 0;
let num2 = 0;
let operator = "+";
num1 = parseInt(prompt("What is the first input value?"));
num2 = parseInt(prompt("What is the second input value?"));

// console.log(num1);
// console.log(num2);
// console.log(Add(num1, num2));

function Add(x, y){
    // operator = "+"
    let sumAdd = x + y;
    // num1 = sumAdd;
    return sumAdd;
}

function Subtract(x, y){
    let sumSubtract = x - y;
    // num1 = sumSubtract;
    return sumSubtract;
}

function Multiply(x, y){
    let sumMultiply = (x * y);
    // num1 = sumMultiply
    return sumMultiply;
}

function Divide(x, y){
    let sumDivide = (x / y);
    // num1 = sumDivide;
    let sumDivideRounded = Math.round(10 * sumDivide) / 10;
    return sumDivideRounded;
}

function Operate(){
    if(operator === "+"){
        num1 = Add(num1, num2);
        console.log(num1);
    }
    else if (operator === "-"){
        num1 = Subtract(num1, num2);
        console.log(num1);

    }
    // else if (operator === "÷"){
    //     num1 = Divide(num1, num2);
    // }
    // else if (operator === "×"){
    //     num1 = Multiply(num1, num2);
    // }
    // else if (operator === "="){
        
    // }
    // else if (operator === "."){

    // }
    // else if (operator === "C"){

    // }
    // else if (operator === "AC"){
    //     num1 = 0;
    //     num2 = 0;
    // }
};




function CreateBtn(name){
    let btn = document.createElement('button');
    let btnText = document.createTextNode(name);
    btn.appendChild(btnText);
    btnContainer.appendChild(btn);
    btn.classList.add(name);
}

// creates all buttons
for(i = 0; i <= 9; i++){
    CreateBtn(i.toString());
}
CreateBtn(".");
CreateBtn("C");
CreateBtn("AC");
CreateBtn("+");
CreateBtn("-");
CreateBtn("=");
CreateBtn("÷");
CreateBtn("×");



