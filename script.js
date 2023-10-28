const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentValue = "";
let operator = "";
let result = 0;
let clearDisplay = false;

function updateDisplay() {
    display.value = currentValue;
}


function clearCalculator() {
    currentValue = "";
    operator = "";
    result = 0;
    clearDisplay = false;
    updateDisplay();
}

function calculate() {
    if (operator === "+") {
        result += parseFloat(currentValue);
    } else if (operator === "-") {
        result -= parseFloat(currentValue);
    } else if (operator === "*") {
        result *= parseFloat(currentValue);
    } else if (operator === "/") {
        result /= parseFloat(currentValue);
    } else {
        result = parseFloat(currentValue);
    }

    currentValue = result.toString();
    operator = "";
    clearDisplay = true;
    updateDisplay();
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;
        if (button.classList.contains("digit")) {
            if (clearDisplay) {
                currentValue = "";
                clearDisplay = false;
            }
            currentValue += buttonValue;
            updateDisplay();
        } else if (button.classList.contains("operator")) {
            if (currentValue !== "") {
                if (operator !== "") {
                    calculate();
                }
                operator = buttonValue;
                clearDisplay = true;
            }
        } else if (button.id === "clear") {
            clearCalculator();
        } else if (button.id === "backspace") {
            currentValue = currentValue.slice(0, -1);
            updateDisplay();
        } else if (button.id === "calculate") {
            calculate();
        }
    });
});
