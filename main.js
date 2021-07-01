// create a function for creating buttons
// function for multiply, divide, add, and subtract
// each operator function MUST save the sum of the first two inputs as ---
// a variable and add each input after to that variable and save it again
// create a function that takes an operator and 2 numbers and calls the function on those nums
let btnContainer = document.querySelector('#btnContainer');
let num1 = ""; // will equal num1Arr
let num2 = ""; // will equal num2Arr
let hasOperated = false;
let operator = "";
let num1Arr = [];
let num2Arr = [];
let isClicked = false;
// num1 = parseInt(prompt("What is the first input value?"));
// num2 = parseInt(prompt("What is the second input value?"));

function Add(x, y){
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
    hasOperated = true;
    if(operator === "+"){
        num1ArrJoin();
        num2ArrJoin();
        num1Arr = [];
        num2Arr = [];
        if (num2 !== ""){
            num1 = Add(num1, num2);
            console.log("operate " + num1);
            num2 = "";
        }
        // num1ArrJoin();
        // num1Arr = [];
        // else {
        // num1ArrJoin();
        // num1Arr = [];
        // }
    }
    else if (operator === "-"){
        num1 = Subtract(num1, num2);

    }
    // else if (operator === "÷"){
    //     num1 = Divide(num1, num2);
    // }
 
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

//Creates each button and assigns the name of the operator and number on click
function CreateBtn(name, btnOp, number){
    let btn = document.createElement('button');
    let btnText = document.createTextNode(name);
    btn.appendChild(btnText);
    btnContainer.appendChild(btn);
    btn.classList.add(name);
    btn.addEventListener('click', function(){
        if (hasOperated === false){
            if(btnOp !== null){
                operator = btnOp;
                Operate();
            }else if (number){
                num1Arr.push(name);
                console.log("this is num1Arr " + num1Arr);
            }else if (name === "AC"){
                num1 = 0;
                num2 = 0;
            } else if (name === "C")
                num1Arr.pop();
        } else if (hasOperated === true){
            if(btnOp !== null){
                operator = btnOp;
                Operate();
            }else if (number){
                num2Arr.push(name);
                console.log("this is num2Arr " + num2Arr);
            }else if (name === "AC"){ 
            } else if (name === "C")
                num2Arr.pop();
        }
    });
}

function num1ArrJoin(){
    for (let i = 0; i < num1Arr.length; i++){
        num1 = num1 + num1Arr[i];
    }
    num1 = parseInt(num1);
    console.log("num1ArrJoin value " + num1)
}

function num2ArrJoin(){
    if (num2Arr.length !== 0){
        for (let i = 0; i < num2Arr.length; i++){
            num2 = num2 + num2Arr[i]; 
        }
        num2 = parseInt(num2);
        console.log("num2ArrJoin value " + num2)
    }
}

for(i = 0; i <= 9; i++){
    CreateBtn(i.toString(), null, true);
}
CreateBtn(".", null, null); //not done yet
CreateBtn("C", null, null);
CreateBtn("AC", null, null);
CreateBtn("+", "+", null);
CreateBtn("-", "-", null);
CreateBtn("=", null, null); //not done yet
CreateBtn("÷", "/", null);
CreateBtn("×", "*", null);



