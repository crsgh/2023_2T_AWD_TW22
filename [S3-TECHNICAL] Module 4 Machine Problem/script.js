let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(operator) {
    if (currentInput !== '') {
        currentOperator = operator;
        previousInput = currentInput;
        currentInput = '';
        updateDisplay();
    }
}

function calculate() {
    if (currentInput !== '' && previousInput !== '') {
        switch (currentOperator) {
            case '+':
                currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
                break;
            case '-':
                currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
                break;
            case '*':
                currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
                break;
            case '/':
                currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
                break;
        }
        currentOperator = '';
        previousInput = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
