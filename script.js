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

let firstNum = 0;
let operationArray = [];
let displayValue = 0;

const smallDisplay = document.querySelector('.secondaryDisplay');

const display = document.querySelector('.display');
display.textContent = displayValue;

const numButtons = document.querySelectorAll('.number'); //When the numbers are clicked they update the display
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
    }); 
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        firstNum = displayValue;
        smallDisplay.textContent += displayValue;
        // console.log(firstNum);
        switch(button.textContent) {
            case '÷':
                operationArray[0] = divide;
                smallDisplay.textContent += ' ÷ '; 
                break;
            case 'x':
                operationArray[0] = multiply;
                smallDisplay.textContent += ' x ';
                break;
            case '-':
                operationArray[0] = subtract;
                smallDisplay.textContent += ' - ';
                break;
            case '+':
                operationArray[0] = add;
                smallDisplay.textContent += ' + ';
                break;
        }
        displayValue = 0;
        console.log(operationArray);
    })
})

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    smallDisplay.textContent += displayValue;
    displayValue = operationArray[0](Number(firstNum), Number(displayValue));
    display.textContent = displayValue;
})

// let array = [add];
// console.log(array[0](7,2))