const display = document.getElementById('display');
const themeToggle = document.getElementById('themeToggle');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value.replace(/\^/g, '**');
    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}

// Keyboard Support
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if ((/\d|\+|\-|\*|\/|\./).test(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

// Theme Toggle
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

function square() {
  display.value = Math.pow(parseFloat(display.value), 2);
}

function squareRoot() {
  display.value = Math.sqrt(parseFloat(display.value));
}

function percent() {
  display.value = parseFloat(display.value) / 100;
}

function power() {
  display.value += '^';
}

function insertPi() {
  display.value += Math.PI.toFixed(6);
}

function toggleSign() {
  display.value = (-parseFloat(display.value)).toString();
}

function log10() {
  display.value = Math.log10(parseFloat(display.value));
}

function ln() {
  display.value = Math.log(parseFloat(display.value));
}

