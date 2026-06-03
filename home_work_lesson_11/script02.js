
const button = document.querySelector('.btn');
    const image = document.querySelector('.img');

function getRandomImage() {
    const randomInt = Math.floor(Math.random() * 9) + 1;
    const imagePath = `./img/${randomInt}.png`; 
    console.log(randomInt);
    

    image.setAttribute('src', imagePath);

};

button.addEventListener('click', ()=> {
    getRandomImage();
});