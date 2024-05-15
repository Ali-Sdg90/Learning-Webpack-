const sumNumbers = document.querySelector(".sum-numbers");

const num1 = document.querySelector(".input-1");
const num2 = document.querySelector(".input-2");

document.querySelector(".app-form").addEventListener("submit", (event) => {
    event.preventDefault();

    sumNumbers.textContent = +num1.value + +num2.value;
});
