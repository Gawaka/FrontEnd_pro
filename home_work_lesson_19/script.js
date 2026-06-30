
async function getCharacter() {
    const randomChar = Math.floor(Math.random() * 80) + 1;
    await fetch(`https://akabab.github.io/starwars-api/api/id/${randomChar}.json`)
        .then(responce=> {
            if(!responce.ok) {
                console.log('Error! Character is not found!');
            }
            return responce.json();
        })
        .then(data=> {
            renderCard(data)
            console.log(data)
        })
        .catch(error => {
            console.error('Помилка запиту:', error);
    });
};

function renderCard(char, update) {
    const characterCard = document.querySelector('.char-card');
    const charItem = document.createElement('div');
    charItem.classList.add('char-item');
    charItem.innerHTML = `
        <h2>${char.name}</h2>
        <img class="char-img" src="${char.image}" alt="${char.name}">
        <p>Homeworld: ${char.homeworld || 'Unknown'}</p>
        <p>Species: ${char.species}</p>
        <p>Gender: ${char.gender}</p>
        ${char.masters ? `<p>Masters: ${char.masters}</p>` : ''}
    `;

    const refreshBtn = document.createElement('button');
    refreshBtn.textContent = 'Refresh';
    refreshBtn.classList.add('char-btn');

    refreshBtn.addEventListener('click', ()=> {
        characterCard.innerHTML = '';
        getCharacter()
    });

    characterCard.append(charItem, refreshBtn);
};

getCharacter();