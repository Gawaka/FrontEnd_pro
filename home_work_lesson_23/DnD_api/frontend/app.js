
const loadBtn = document.getElementById('load-btn');
const container = document.getElementById('characters-container');

const API_URL = 'http://localhost:5000/api/characters';

async function fetchCharacters() {
    try {
        container.innerHTML = 'Завантаження...';

        const response = await fetch(API_URL);
        
        const characters = await response.json();

        container.innerHTML = '';

        if (characters.length === 0) {
            container.innerHTML = '<p>немає героїв</p>';
            return;
        }

        characters.forEach(hero => {
            const card = document.createElement('div');
            card.classList.add('character-card');

            card.innerHTML = `
                <h3>${hero.name} (Рівень ${hero.level})</h3>
                ${hero.image ? `<img src="${hero.image}" alt="${hero.name}">` : ''}
                <p><strong>Раса:</strong> ${hero.race.name}</p>
                <p><strong>Клас:</strong> ${hero.charClass.name}</p>
                <p><strong>Світогляд:</strong> ${hero.worldview || 'Не вказано'}</p>
                <p><em>${hero.bio || ''}</em></p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error('Помилка фронтенду:', error);
        container.innerHTML = '<p style="color: red;">Не вдалося з\'єднатися з сервером. Перевір чи запущений бекенд!</p>';
    }
}

loadBtn.addEventListener('click', fetchCharacters);