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
        // console.log(display.textContent);
        // console.log(button.textContent);
        // console.log(mostRecentNum);
    }); 
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        numArray.push(mostRecentNum);
        smallDisplay.textContent += mostRecentNum;
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
        console.log(operationArray);
    })
})

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    smallDisplay.textContent += mostRecentNum;
    numArray.push(mostRecentNum);
    console.log(numArray);
    for (let i = 0; i < operationArray.length; i++) {
        
        mostRecentNum = operationArray[i](Number(numArray[i]), Number(numArray[i + 1]));
        numArray[i + 1] = mostRecentNum;
        
        console.log(mostRecentNum);
        console.log(numArray);
    }

    numArray = [];
    operationArray = [];
    
    display.textContent = mostRecentNum;
})
