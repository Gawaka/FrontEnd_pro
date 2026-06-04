
const box = document.querySelector('.btn-box');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
let userURL = '';

box.addEventListener('click', (e)=> {
    const target = e.target;
    
    if (target === btn1) {
        userURL = prompt('Введіть посилання: ');
    } else if (target === btn2) {
        if (userURL) {
            window.location.href = userURL;
        } else {
            alert('Введіть спочатку посилання!');
        }
    }
});