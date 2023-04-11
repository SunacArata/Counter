'use strict';

const button = document.getElementById('button');
let count = 0;

button.addEventListener('click', () => {
    count++;

    if (count === 10) {
        count = 0;
    }

    button.textContent = count;
});

console.log(count);
