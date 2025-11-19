let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

// Handle number and operator clicks
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.getAttribute("data-value");
        if (value) {
            display.value += value;
        }
    });
});

// Equal button – evaluate input
document.getElementById("equal").addEventListener("click", () => {
    try {
        display.value = eval(display.value); // calculates the result
    } catch {
        display.value = "Error";
    }
});

// Clear button
document.getElementById("clear").addEventListener("click", () => {
    display.value = "";
});