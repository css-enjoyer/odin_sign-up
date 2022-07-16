const passwordField = document.querySelector("#password-field");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const button = document.querySelector("#proceed button");

const alert = document.createElement("div");
alert.textContent = "Passwords do not match."
alert.setAttribute("style", "color: red; font-size: .6rem");

button.addEventListener("click", () => {
    if((password.value == passwordConfirm.value) && password.value != "" && passwordConfirm.value != "") {
        console.log(password.value);
        passwordConfirm.setCustomValidity("");
        if(passwordField.hasChildNodes(alert)) {
            passwordField.removeChild(alert);
        }
    } else {
        passwordConfirm.setCustomValidity("Invalid field.");
        passwordField.appendChild(alert);
    }
});

let counter = 0;
const logo = document.querySelector("#logo");
let audio = document.querySelector("#boom");
logo.addEventListener("click", () => {
    counter++;
    console.log(counter);
    if(counter % 5 == 0) {
        audio.play();
    }
});

const login = document.querySelector("#login");
const body = document.querySelector("body");
login.addEventListener("click", () => {
    body.setAttribute("style", "cursor: url(images/cursor.png), auto");
    login.textContent = "Log in?"
});


