const sumNumbers = document.querySelector(".sum-numbers") as HTMLElement;

const num1 = document.querySelector(".input-1") as HTMLInputElement;
const num2 = document.querySelector(".input-2") as HTMLInputElement;

(document.querySelector(".app-form") as HTMLFormElement).addEventListener(
    "submit",
    (event) => {
        event.preventDefault();

        sumNumbers.textContent = (+num1.value + +num2.value).toString();
    }
);
