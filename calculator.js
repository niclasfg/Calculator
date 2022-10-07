const buttonZero = document.getElementById("digit-0");
const buttonOne = document.getElementById("digit-1");
const buttonTwo = document.getElementById("digit-2");
const buttonThree = document.getElementById("digit-3");
const buttonFour = document.getElementById("digit-4");
const buttonFive = document.getElementById("digit-5");
const buttonSix = document.getElementById("digit-6");
const buttonSeven = document.getElementById("digit-7");
const buttonEight = document.getElementById("digit-8");
const buttonNine = document.getElementById("digit-9");

const buttonClear = document.getElementById("operator-clear");
const buttonBack = document.getElementById("operator-backspace");
const buttonComma = document.getElementById("operator-comma");
const buttonEqual = document.getElementById("operator-calculate");
const buttonNegative = document.getElementById("operator-negative");
const buttonAns = document.getElementById("operator-answer");

const buttonAdd = document.getElementById("operator-add");
const buttonSubtract = document.getElementById("operator-subtract");
const buttonMultiply = document.getElementById("operator-multiply");
const buttonDivide = document.getElementById("operator-divide");


const displayInput = document.getElementById("inputString");
const displayOldInput = document.getElementById("oldInputString");
const displayResult = document.getElementById("resultString");

const operators = [".", "/", "*", "+", "-"];
 

// Perform the calculator on the input string.
function calculate(s){
    function comma(a,b){return a.toString()+"."+b.toString();}

    function multiply(a,b){return a*b;}

    function divide(a,b){
        if(b == 0){ throw "You can't divide by zero."; }
        return a/b;
    }

    function add(a,b){return a+b;}

    function subtract(a,b){return a-b;}
    
    console.log("L8: " + s);
    let signs = [".", "/", "*", "+", "-"];
    let funcs = [comma, divide, multiply, add, subtract];
    let tokens = s.split(/\b/);
    for (let round = 0; round < signs.length; round++) {
        console.log("L25: " + tokens.join(" "));          
        for (let place = 0; place <tokens.length; place++) {
            if (tokens[place] == signs[round]) {
                let a = parseFloat(tokens[place - 1]);
                let b = parseFloat(tokens[place + 1]);
                let result = funcs[round](a,b);
                tokens[place -1] = result.toString();
                tokens.splice(place--, 2);
            }
            
        }
    }
    return tokens[0];
}

// Updates the input String in the gui
function updateInputString() {
    displayInput.textContent = inputString;
}

//Clears the inputstring in the gui
function clearInput() {
    inputString = "";
    updateInputString();
}

//removes the last character in the gui
function backspace() {
    inputString = inputString.slice(0, inputString.length-1);
    updateInputString();
}

//adds a digit tot the input string
function addDigit(n) {
    inputString = inputString + n;
    updateInputString();
}

//adds an operator to the inputString
function addOperator(o) {
    if (operators.includes(inputString.slice(-1))) {
        return;
    }
    if (inputString == "") {
        pressAns();
    }
    inputString = inputString + o;
    updateInputString();
}

//adds a comma to the input
function addComma() {
    if (inputString.slice(-1) == ".") {
        return;
    }
    if (operators.includes(inputString.slice(-1))) {
        inputString = inputString + "0";
    }
    inputString = inputString + ".";
    updateInputString();
}

//NOT IMPLEMENTED 
//adds a negative sign to the input
function negate() {
    //Not implemented yet
    //inputString = inputString + "+0-";
    console.log("Negate is not implemented.")
    updateInputString();
}

// is run when the user press Ansa and input the last result.
function pressAns(){
    inputString = inputString + ans;
    updateInputString();
}

//Is run whe nthe user press =
function pressEqual(){
    if (!validateInput()) {
        return;
    }
    s = displayInput.textContent;
    let result = calculate(s);
    displayOldInput.textContent = inputString + " =";
    displayResult.textContent = result;
    ans = result;
    inputString = "";
    updateInputString(); 
}

// Check that the input is valid
function validateInput() {
    if (operators.includes(inputString.slice(-1))) {
        return false;
    }
    return true;
}

let ans = "";
let inputString = "";
updateInputString();
displayOldInput.textContent = "";
displayResult.textContent = "";
