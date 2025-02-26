// Create functions for the four operations and test them
let firstNum = 0;
let lastNum = 0;

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
    displayVar.textContent = this.textContent;
    operated = true;
};

// Operate on the numbers when = is pressed
let equalsVar = document.querySelector(".equals");
equalsVar.addEventListener("click", saveLast);
function saveLast() {
    lastNum = parseFloat(displayVar.textContent);
    operate(operatorVar, firstNum, lastNum);
    let result = operate(operatorVar, firstNum, lastNum);
    displayVar.textContent = result;
    operated = true;
};