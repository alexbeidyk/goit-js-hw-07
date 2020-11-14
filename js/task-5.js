'use strict';

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
    outputRef.textContent = `Незнакомец`;
    if (inputRef.value !== '') {
        outputRef.textContent = inputRef.value
    }
})