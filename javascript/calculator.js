let number1 = 0;
let number2 = 0;
let operation;
let result = 0;

function buttonClicked(el) {
    let buttonText = el.innerText;
    if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
        operation = buttonText; 
    } else {
        if (number1 === 0) {
            number1 = parseInt(buttonText);
        }
        else {
            number2 = parseInt(buttonText);
        }
    }
    console.log(number1, number2, operation);
}

function applyOperation() {
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break
        case '*':
             result = number1 * number2;
            break;
        case "/":
             result = number1 / number2;
            break;
        default:
            alert("No operation selected");
    }
    document.getElementById("input").value = result;
}

function clear() {
    number1 = 0;
    number2 = 0;
    operation = undefined;
    result = 0;
}


// Variables
// Let Const Keywaord
// Functions
// Dom Manipulation
// If else block
// Switch Statement
