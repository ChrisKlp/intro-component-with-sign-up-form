const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const firstName = document.querySelector('[data-first-name]');
const lastName = document.querySelector('[data-last-name]');
const email = document.querySelector('[data-email]');
const password = document.querySelector('[data-password]');
const submitBtn = document.querySelector('.form__submit-btn');
const formFields = [firstName, lastName, email, password];

const clearError = () => {
    firstName.parentElement.classList.remove('error');
    lastName.parentElement.classList.remove('error');
    email.parentElement.classList.remove('error');
    password.parentElement.classList.remove('error');
};

const checkEmail = () => {
    re.test(email.value)
        ? email.parentElement.classList.remove('error')
        : email.parentElement.classList.add('error');
};

const checkForm = e => {
    e.preventDefault();
    clearError();
    formFields.forEach(field => {
        field.value === ''
            ? field.parentElement.classList.add('error')
            : field.parentElement.classList.remove('error');
    });
    checkEmail();
};

submitBtn.addEventListener('click', checkForm);
formFields.forEach(field => field.addEventListener('keyup', () => {
    field.parentElement.classList.remove('error')
}));
