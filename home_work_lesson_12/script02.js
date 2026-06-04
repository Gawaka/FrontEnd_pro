const box = document.querySelector('.btn-box');

box.addEventListener('click', (e)=> {
    const target = e.target;

    if (target.tagName === 'BUTTON') {
        alert(`Button: ${target.textContent}`);
    }
});