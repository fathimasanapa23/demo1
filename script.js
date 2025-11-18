const display = document.getElementById('result');
const equation = document.querySelector('.equation');
const historyDiv = document.getElementById('history');
let history = [];

function appendToDisplay(value) {
    display.value += value;
    equation.textContent = display.value;
}

function clearScreen() {
    display.value = '';
    equation.textContent = '';
}

function calculate() {
    try {
        const result = eval(display.value);
        history.push({ equation: display.value, result });
        display.value = result;
        equation.textContent = '';
    } catch (error) {
        display.value = 'Error';
        equation.textContent = '';
    }
}

function showHistory() {
    historyDiv.style.display = historyDiv.style.display === 'block' ? 'none' : 'block';
    historyDiv.innerHTML = '';
    history.forEach(item => {
        const p = document.createElement('p');
        p.textContent = `${item.equation} = ${item.result}`;
        historyDiv.appendChild(p);
    });
}
