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

let numArray = [];
let operationArray = [];
let mostRecentNum = 0;

const smallDisplay = document.querySelector('.secondaryDisplay');

const display = document.querySelector('.display');
display.textContent = mostRecentNum;

const clearButton = document .querySelector('.clear');
clearButton.addEventListener('click', () => {
    mostRecentNum = 0;
    numArray = [];
    operationArray = [];
    display.textContent = mostRecentNum;
    smallDisplay.textContent = undefined;
})

const numButtons = document.querySelectorAll('.number'); //When the numbers are clicked they update the display
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (mostRecentNum === 0) {
            mostRecentNum = button.textContent;
        } else {
            mostRecentNum += button.textContent;
        }
        
        display.textContent = mostRecentNum; // Updates the display
    }); 
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let length = smallDisplay.textContent.length;
        let lastChar = smallDisplay.textContent.charAt(length -1);
        if (lastChar >= '0' && lastChar <= '9') { // If the smallDisplay ends in a number the answer replaces it
            smallDisplay.textContent = mostRecentNum;
        } else {
            smallDisplay.textContent += mostRecentNum; // Allows for multiple operation equations
        }
        numArray.push(mostRecentNum);
        switch(button.textContent) {
            case '÷':
                operationArray.push(divide);
                smallDisplay.textContent += ' ÷ '; 
                break;
            case 'x':
                operationArray.push(multiply);
                smallDisplay.textContent += ' x ';
                break;
            case '-':
                operationArray.push(subtract);
                smallDisplay.textContent += ' - ';
                break;
            case '+':
                operationArray.push(add);
                smallDisplay.textContent += ' + ';
                break;
        }
        mostRecentNum = 0;
    })
})

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    smallDisplay.textContent += mostRecentNum;
    numArray.push(mostRecentNum);
    for (let i = 0; i < operationArray.length; i++) {
        
        mostRecentNum = operationArray[i](Number(numArray[i]), Number(numArray[i + 1]));
        numArray[i + 1] = mostRecentNum;
    }

    numArray = [];
    operationArray = [];
    
    roundedAnswer = Math.round(mostRecentNum * 1000) / 1000;
    display.textContent = roundedAnswer;
})
