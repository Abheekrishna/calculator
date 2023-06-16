class CALCULATOR {
    constructor(previousOperandText, currentOperandText) {
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = number;
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand;
    }

    
}


const numberBtns = document.querySelectorAll('[data-numbers]');
const operationBtns = document.querySelectorAll('[data-operations]');
const equalBtn = document.querySelector('[data-equals]');
const currentOperandText = document.querySelector('[data-current-operand]');
const previousOperandText = document.querySelector('[data-previous-operand]');



const calculator = new CALCULATOR(previousOperandText, currentOperandText)

numberBtns.forEach((button) => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})