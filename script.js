// Create functions for the four operations and test them
// Enable and disable = button
let firstNum = 0;
let lastNum = 0;
let operatorPressed = false;


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
    if (b === 0) {
    return "Nice try, Einstein.";
    } else {
    return a / b;
    };
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
    decimalVar.disabled = false;
    if (operatorPressed === true) { // Only take the last operator entered
        operatorVar = this.textContent;
    } else {
        firstNum = parseFloat(displayVar.textContent);
        operatorVar = this.textContent
        displayVar.textContent = "0";
        operated = true;
        operatorPressed = true;
    };
};

// Operate on the numbers when = is pressed
let equalsVar = document.querySelector(".equals");
equalsVar.addEventListener("click", saveLast);
function saveLast() {
    lastNum = parseFloat(displayVar.textContent);
    operate(operatorVar, firstNum, lastNum);
    let result = operate(operatorVar, firstNum, lastNum);
    if (result === "Nice try, Einstein.") {
        displayVar.textContent = "Nice try, Einstein."; // Snarky message if divides by 0
    } else {
        displayVar.textContent = round(result);
    };
    operated = true;
    operatorPressed = false;
    decimalVar.disabled = false;
};


// Round number to the first two decimals
function round(num) {
    return Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2);
}


// Start fresh when Clear is pressed
let clearVar = document.querySelector(".clear");
clearVar.addEventListener("click", clearFun);
function clearFun() {
    operated = false;
    firstNum = 0;
    lastNum = 0;
    operatorVar = "";
    displayVar.textContent = "0";
    operatorPressed = false;
    decimalVar.disabled = false;
}


// Animate "." button and disable it
let decimalVar = document.querySelector(".decimal");
decimalVar.disabled = false;
decimalVar.addEventListener("click", decimalFun);
function decimalFun() {
    if (displayVar.textContent !== "0") {
        displayVar.textContent += ".";
        decimalVar.disabled = true;
    } else {
        displayVar.textContent = "0.";
        decimalVar.disabled = true;
    }
}


// Animate DEL button
let deleteVar = document.querySelector(".delete");
deleteVar.addEventListener("click", deleteFun);
function deleteFun() {
    if (displayVar.textContent.length > 1) {
        displayVar.textContent = displayVar.textContent.slice(0, -1);
    } else {
        displayVar.textContent = "0";
    }
}