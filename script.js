const inputs = document.querySelectorAll("input");

// Make fields initially valid
// inputs.forEach((input) => {
//     input.setCustomValidity("");
// });


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



