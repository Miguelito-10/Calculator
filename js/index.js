import {Display} from './display.js';

const displayPreviousValue = document.getElementById('previous-value');
const displayCurrentValue = document.getElementById('current-value');
const numbersButton = document.querySelectorAll('.number');
const operatorsButton = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue, displayCurrentValue);

numbersButton.forEach(button => {
    button.addEventListener('click', () => display.addNumber(button.innerHTML));
});