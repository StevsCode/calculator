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