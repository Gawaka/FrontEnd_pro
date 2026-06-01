
const text = document.querySelector('p');
const button = document.querySelector('button');

button.addEventListener('click', ()=> {
    text.classList.toggle('red');    
});

