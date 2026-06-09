
const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const prefix = phone.dataset.prefix || '+380';


phoneInput.addEventListener('focus', (e)=> {
    if (!e.target.value) {
        e.target.value = prefix;
    }
});

phoneInput.addEventListener('input', (e)=> {
    let phoneInputValue = e.target.value;

    if(!phoneInputValue.startsWith(prefix)) {
        e.target.value = prefix;
        return;
    }

    let body = phoneInputValue.slice(prefix.length);
    body = body.replace(/\D/g, '');

    e.target.value = prefix + body;
});

function handleSubmit() {
    const isPhoneValid = phone.value.length > prefix.length;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email.value);


    if(!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim() || !phoneInput.value.trim()) {
        alert('Заповніть всі поля!');
    };

    if (!isEmailValid) {
        alert('Введіть коректний email (наприклад: petrovich@mail.com)');
    };

    const formData = {
        userName: nameInput.value,
        userMessage: messageInput.value,
        userEmail: emailInput.value,
        userPhone: phoneInput.value
    };

    form.reset();

    return console.log(formData);
};

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    handleSubmit();
});