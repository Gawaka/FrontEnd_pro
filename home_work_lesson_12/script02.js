const box = document.querySelector('.btn-box');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');

box.addEventListener('click', (e)=> {
    const target = e.target;
    if(target === btn1) {
        alert('Button: 1');
    } else if(target === btn2) {
        alert('Button: 2');
    } else if (target === btn3) {
        alert('Button: 3');
    }
});