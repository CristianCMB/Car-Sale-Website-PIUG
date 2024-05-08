const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.parentElement.querySelector(".form__input-error-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('uname').value;
    var password = document.getElementById('psw').value;

   if(username === 'admin' && password === 'parola') {
    Swal.fire({
        icon: 'success',
        title: 'Login successful',
        showConfirmButton: false,
        timer: 1500
    });
    setTimeout(function() {
            window.location.href = 'home.html';
        }, 2000);
} else {
    setFormMessage(this, "error", "Invalid username/password combination");
}
});
