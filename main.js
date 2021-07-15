// create a function for creating buttons
// function for multiply, divide, add, and subtract
// each operator function MUST save the sum of the first two inputs as ---
// a variable and add each input after to that variable and save it again
// create a function that takes an operator and 2 numbers and calls the function on those nums
let calcOutput = document.querySelector("#result");
let calcInput = document.querySelector("#input")
let btnContainer = document.querySelector('#btnContainer');
let num1 = ""; // will equal num1Arr
let num2 = ""; // will equal num2Arr
let hasOperated = false;
let operator = "";
let previousOperator = null;
let num1Arr = [];
let num2Arr = [];
let decimalPressed = false;

function Add(x, y){
    let sumAdd = x + y;
    return sumAdd;
}

function Subtract(x, y){
    let sumSubtract = x - y;
    return sumSubtract;
}

function Multiply(x, y){
    let sumMultiply = (x * y);
    return sumMultiply;
}

function Divide(x, y){
    let sumDivide = (x / y);
    let sumDivideRounded = Math.round(1000000 * sumDivide) / 1000000;
    return sumDivideRounded;
}

function Operate(){
    decimalPressed = false;
    num1ArrJoin();
    num2ArrJoin();
    num1Arr = [];
    num2Arr = [];
    if (operator === "=" && num2 === ""){
        return;
    }
    calcInput.innerHTML = "";
    hasOperated = true;
    tmpOperator = operator; // tmpOp = null , op is + || tmpOp = null , op is - || tmpOp = - 
    console.log("this is prev op "+ previousOperator)
    if (previousOperator !== operator){ // previousOp is null, op is + || previousOp is +, op - ||
        tmpOperator = previousOperator; // null = null || tmp + previous + ||
        previousOperator = operator; // + = + || prebious - = op - ||
        console.log("this is prev op "+ previousOperator)   
    }
    if(tmpOperator === "+"){
        if (num2 !== ""){
            num1 = Add(num1, num2);
            console.log("equals " + num1);
            calcOutput.innerHTML = num1;
            num2 = "";
        }
    }
    else if (tmpOperator === "-"){
        if (num2 !== ""){
            num1 = Subtract(num1, num2);
            console.log("equals " + num1);
            calcOutput.innerHTML = num1;
            num2 = "";
        }
    }
    else if (tmpOperator === "/"){
        if (num2 !== ""){
            num1 = Divide(num1, num2);
            console.log("equals " + num1);
            calcOutput.innerHTML = num1;
            num2 = "";
        }
    }
    else if (tmpOperator === "*"){
        if (num2 !== ""){
            num1 = Multiply(num1, num2);
            console.log("equals " + num1);
            calcOutput.innerHTML = num1;
            num2 = "";
        }
    }
    else if (tmpOperator === "=" && num2 !== ""){
        num2 = "";
        calcOutput.innerHTML = num1;
    }
};
//Creates each button and assigns the name of the operator and number on click
function CreateBtn(name, btnOp, number, idName){
    let btn = document.createElement('button');
    let btnText = document.createTextNode(name);
    btn.appendChild(btnText);
    btnContainer.appendChild(btn);
    btn.setAttribute('id', idName);
    btn.classList.add("btn");
    btn.addEventListener('click', function(){
        if (hasOperated === false){
            if(btnOp !== null){
                operator = btnOp;
                console.log("this is the operator = " + operator);
                Operate();
            }else if (number){
                if (name === "." && decimalPressed === false){
                    decimalPressed = true;
                    num1Arr.push(name);
                    calcInput.innerHTML = calcInput.innerHTML + name;
                } else if (name !== "."){
                    num1Arr.push(name);
                    calcInput.innerHTML = calcInput.innerHTML + name;
                }
                console.log("this is num1Arr " + num1Arr);
            }else if (name === "AC"){
                num1 = "";
                num2 = "";
                num1Arr = [];
                num2Arr = [];
                hasOperated = false;
                calcOutput.innerHTML = "";
                calcInput.innerHTML = "";
                decimalPressed = false;
            } else if (name === "C"){
                num1Arr.pop();
                calcInput.innerHTML = calcInput.innerHTML.slice(0, -1);
            }
        } else if (hasOperated === true){
            if(btnOp !== null){
                operator = btnOp;
                Operate();
            }else if (number){
                if (name === "." && decimalPressed === false){
                    decimalPressed = true;
                    num2Arr.push(name);
                    calcInput.innerHTML = calcInput.innerHTML + name;
                } else if (name !== "."){
                    num2Arr.push(name);
                    calcInput.innerHTML = calcInput.innerHTML + name;
                }
                console.log("this is num2Arr " + num2Arr);
            }else if (name === "AC"){ 
                num1 = "";
                num2 = "";
                num1Arr = [];
                num2Arr = [];
                hasOperated = false;
                calcOutput.innerHTML = "";
                calcInput.innerHTML = "";
                decimalPressed = false;
            } else if (name === "C"){
                num2Arr.pop();
                calcInput.innerHTML = calcInput.innerHTML.slice(0, -1);
            }
        }
    });
}

function num1ArrJoin(){
    for (let i = 0; i < num1Arr.length; i++){
        num1 = num1 + num1Arr[i];
    }
    num1 = parseFloat(num1);
    console.log("num1ArrJoin value " + num1)
}

function num2ArrJoin(){
    if (num2Arr.length !== 0){
        for (let i = 0; i < num2Arr.length; i++){
            num2 = num2 + num2Arr[i]; 
        }
        num2 = parseFloat(num2);
        console.log("num2ArrJoin value " + num2)
    }
}

function disableDec(){
    if (calcInput.innerHTML.includes(".")){
        document.getElementById("decimal").disabled = true;
    }
}

CreateBtn("🧑‍🏫", "=", null, "emoji");
CreateBtn("AC", null, null, "AC");
CreateBtn("C", null, null, "C");
CreateBtn("÷", "/", null, "divide");
CreateBtn("7", null, true, "seven");
CreateBtn("8", null, true, "eight");
CreateBtn("9", null, true, "nine");
CreateBtn("×", "*", null, "multiply");
CreateBtn("4", null, true, "four");
CreateBtn("5", null, true, "five");
CreateBtn("6", null, true, "six");
CreateBtn("+", "+", null, "add");
CreateBtn("1", null, true, "one");
CreateBtn("2", null, true, "two");
CreateBtn("3", null, true, "three");
CreateBtn("-", "-", null, "subtract");
CreateBtn("0", null, true, "zero");
CreateBtn(".", null, true, "decimal");
CreateBtn("=", "=", null, "equals");
let calcBtns = document.querySelectorAll(".btn");




