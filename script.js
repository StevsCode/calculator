// Create functions for the four operations and test them
// Enable and disable = button
let firstNum = 0;
let lastNum = 0;
let equalsVar = document.querySelector(".equals");
equalsVar.disabled = true;

// Add
function addResult(a, b) {
    return a + b;
};

// Subtract
function subtractResult(a, b) {
    return a - b;
};

// Multiply
function multiplyResult(a, b) {
    return a * b;
};

// Divide
function divideResult(a, b) {
    return a / b;
};


// Create function that makes the operation
function operate(operator, firstNum, secondNum) {
    if (operator === "+") {
        return addResult(firstNum, secondNum);
    } else if (operator === "-") {
        return subtractResult(firstNum, secondNum);
    } else if (operator === "*") {
        return multiplyResult(firstNum, secondNum);
    } else {
        return divideResult(firstNum, secondNum);
    };
};


// Display each digit
// Store the number on the display
let displayVar = document.querySelector(".display");
let digitVar = document.querySelectorAll(".digit");
digitVar.forEach(button => {
    button.addEventListener("click", displayFun);
});
function displayFun() {
    if (displayVar.textContent === "0" || operated === true) {
        displayVar.textContent = this.textContent;
        operated = false;
    } else {
        displayVar.textContent += this.textContent;
    }
};


// Store the first and second numbers
let operatorBox = document.querySelectorAll(".operator");
operatorBox.forEach(button => {
    button.addEventListener("click", saveFirst);
});
let operated = false;
let operatorVar = "+";
function saveFirst() {
    firstNum = parseFloat(displayVar.textContent);
    operatorVar = this.textContent
    displayVar.textContent = "0";
    operated = true;
    equalsVar.disabled = false;
};

// Operate on the numbers when = is pressed
equalsVar.addEventListener("click", saveLast);
function saveLast() {
    lastNum = parseFloat(displayVar.textContent);
    operate(operatorVar, firstNum, lastNum);
    let result = operate(operatorVar, firstNum, lastNum);
    displayVar.textContent = round(result);
    operated = true;
    equalsVar.disabled = true;
};


// Round number to the first two decimals
function round(num) {
    return Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2);
}


// Start fresh when Clear is pressed
let clearVar = document.querySelector(".clear");
clearVar.addEventListener("click", clearFun);
function clearFun() {
    equalsVar.disabled = true;
    operated = false;
    firstNum = 0;
    lastNum = 0;
    operatorVar = "";
    displayVar.textContent = "0";
}