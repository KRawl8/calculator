const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const operate = (operationFunction, num1, num2) => {
    return operationFunction(num1, num2);
}

const smallDisplay = document.querySelector('.secondaryDisplay');

const display = document.querySelector('.display');
let displayValue = 0;
display.textContent = displayValue;

const numButtons = document.querySelectorAll('.number');
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayValue === 0) {
            displayValue = button.textContent;
        } else {
            displayValue += button.textContent;
        }
        
        display.textContent = displayValue;
        // console.log(display.textContent);
        // console.log(button.textContent);
        // console.log(displayValue);
    })
})

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    smallDisplay.textContent = displayValue;
})
