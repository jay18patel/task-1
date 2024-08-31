let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';
let isOperatorClicked = false;

function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}

function appendNumber(number) {
    if (isOperatorClicked) {
        currentInput = number;
        isOperatorClicked = false;
    } else {
        currentInput += number;
    }
    updateDisplay(currentInput);
}

function appendOperator(op) {
    if (currentInput === '' && op === '-') {
        currentInput = op;
        updateDisplay(currentInput);
        return;
    }
    if (operand1 === '') {
        operand1 = currentInput;
    } else if (operator && currentInput) {
        operand1 = operate(operator, operand1, currentInput);
        updateDisplay(operand1);
    }
    operator = op;
    isOperatorClicked = true;
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
    updateDisplay('0');
}

function calculateResult() {
    if (operand1 !== '' && operator !== '' && currentInput !== '') {
        operand2 = currentInput;
        let result = operate(operator, operand1, operand2);
        updateDisplay(result);
        operand1 = result;
        currentInput = '';
        operator = '';
    }
}

function operate(op, num1, num2) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error';
        default:
            return '';
    }
}
