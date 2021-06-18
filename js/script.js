// Function declaration

function declaration(number1, number2) {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const addedSquare = square1 + square2;
    const finalResult = addedSquare * addedSquare;
    return finalResult;
}

console.log(declaration(3, 2));


// Function Expression

const expression = function (number1, number2) {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const addedSquare = square1 + square2;
    const finalResult = addedSquare * addedSquare;
    return finalResult;
};

console.log(expression(3, 2));


// Arrow Function

const arrow = (number1, number2) => {
    const square1 = number1 * number1;
    const square2 = number2 * number2;
    const addedSquare = square1 + square2;
    const finalResult = addedSquare * addedSquare;
    return finalResult;
};

console.log(arrow(2, 2));