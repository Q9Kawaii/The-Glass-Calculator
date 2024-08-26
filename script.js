const display = document.getElementById("display");

function appendToDisplay(input) {
    if (input === 'Math.sqrt(') {
        display.value += input + ")";
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value.replace('÷', '/').replace('X', '*'));
    } catch (error) {
        display.value = "Error";
    }
}
