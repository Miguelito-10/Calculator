import { Calculator } from "./calculator.js";

export class Display {
    constructor(displayPreviousValue, displayCurrentValue) {
        this.displayPreviousValue = displayPreviousValue;
        this.displayCurrentValue = displayCurrentValue;
        this.calculator = new Calculator();
        this.previousValue = '';
        this.currentValue = '';
    }
    addNumber(number) {
    this.currentValue = number;
    this.printValues();
    }
    printValues() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = this.previousValue;
    }
}