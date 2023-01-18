class Display {
    constructor(displayPreviousValue, displayCurrentValue) {
        this.displayCurrentValue = displayCurrentValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.currentValue = '';
        this.previousValue = '';
        this.sings = {
            plus: '+',
            split: '%',
            multiply: 'x',
            subtract: '-', 
        }
    }

    delete() {
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValues();
    }

    deleteAll() {
        this.currentValue = '';
        this.previousValue = '';
        this.typeOperation= undefined;
        this.printValues();
    }

    compute(type) {
        this.typeOperation !== 'same' && this.calculate();
        this.typeOperation = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printValues();
    }

    addNumber(number) {
        if(number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues();
    }

    printValues() {
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.sings[this.typeOperation] || ''}`;
    }

    calculate() {
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if( isNaN(currentValue)  || isNaN(previousValue) ) return
        this.currentValue = this.calculator[this.typeOperation](previousValue, currentValue);
    }
}