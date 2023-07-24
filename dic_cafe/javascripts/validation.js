function emailValidation() {
    const form = document.getElementById('form');
    const errorMessage = document.getElementById('error-message');
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('email_confirm');

    function checkEmailsMatch() {
        if (emailInput.value !== confirmEmailInput.value) {
            errorMessage.innerText = "¡Los correos electrónicos no coinciden!";
            confirmEmailInput.classList.add("error"); // Agregamos la clase "error" al input
        } else {
            errorMessage.innerText = "";
            confirmEmailInput.classList.remove("error"); // Eliminamos la clase "error" del input
        }
    }

    emailInput.addEventListener('input', checkEmailsMatch);
    confirmEmailInput.addEventListener('input', checkEmailsMatch);
}

window.onload = emailValidation;