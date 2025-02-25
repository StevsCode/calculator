// Create functions for the four operations and test them
// Add
function addResult(a, b) {
    const addArray = new Array(a, b);
    return addArray
        .reduce((acc, curr) => acc + curr, 0);
};
console.log(addResult(10, 5));

// Subtract
function subtractResult(a, b) {
    const subtractArray = new Array(a, b);
    return subtractArray
        .reduce((acc, curr) => acc - curr, 0);
};
console.log(subtractResult(10, 5));

// Multiply
function multiplyResult(a, b) {
    const multiplyArray = new Array(a, b);
    return multiplyArray
        .reduce((acc, curr) => acc * curr, 1);
};
console.log(multiplyResult(10, 5));

// Divide
function divideResult(a, b) {
    const divideArray = new Array(a, b);
    return divideArray
        .reduce((acc, curr) => acc / curr, 0);
};
console.log(divideResult(10, 5));


// Create variables for each part of the operation
// First number
const firstNum = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

// Operator
const operator = new Array("+", "-", "*", "/");

// Second number
const secondNum = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);


// Create function that makes the operation
function operate(operator, firstNum, secondNum) {
    if (operator === "+") {
        return addResult(firstNum, secondNum)
    } else if (operator === "-") {
        return subtractResult(firstNum, secondNum)
    } else if (operator === "*") {
        return multiplyResult(firstNum, secondNum)
    } else {
        return divideResult(firstNum, secondNum)
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
let operatorVar = document.querySelectorAll(".operator");
operatorVar.forEach(button => {
    button.addEventListener("click", saveFirst);
});
let elementOne = 0;
let operated = false;
function saveFirst() {
    elementOne = displayVar.textContent;
    displayVar.textContent = this.textContent;
    operated = true;
};
// Operate on the numbers when = is pressed
let equalsVar = document.querySelector(".equals");
equalsVar.addEventListener("click", saveLast);
let elementTwo = 0;
function saveLast() {
    elementTwo = displayVar.textContent;
    if (operatorVar.textContent === "+") {
        addResult(elementOne, elementTwo);
    } else if (operatorVar.textContent === "-") {
        subtractResult(elementOne, elementTwo);
    } else if (operatorVar.textContent === "*") {
        multiplyResult(elementOne, elementTwo);
    } else if (operatorVar.textContent === "/") {
        divideResult(elementOne, elementTwo);
    };
};
