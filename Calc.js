const displayElement = document.getElementById('display');
let currentInput = '';
let currentOperator = null;
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(operator) {
    if (currentInput === '' && operator !== '-') return;
    if (currentOperator && currentInput !== '') {
        calculate();
    }
    currentOperator = operator;
    currentInput += ' ' + operator + ' ';
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    displayElement.textContent = value;
}

function clearDisplay() {
    currentInput = '';
    currentOperator = null;
    updateDisplay('0');
}

function backspace() {
    if (currentInput.slice(-1) === ' ') {
        currentInput = currentInput.slice(0, -3);
        currentOperator = null;
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay(currentInput || '0');
}

function calculate() {
    try {
        let result = eval(currentInput);
        if (result === Infinity || isNaN(result)) {
            updateDisplay("Erreur");
        } else {
            updateDisplay(result);
            currentInput = '' + result;
        }
    } catch (e) {
        updateDisplay("Erreur");
    }
    resultDisplayed = true;
}