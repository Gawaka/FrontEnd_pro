
const kyiv = 'Київ';
const vashington = 'Вашингтон';
const london = 'Лондон';

const userYearOfBirth = +prompt('Твій рік народження: ');
const userCity = prompt('Місто в якому ти проживаєш: ');
const userSport = prompt('Твій улюблений вид спорту: ');

const mma = 'Конор МакГрегор';
const basketball = 'Шакіл О\'ніл';
const football = 'Ліонел Мессі';

const userAge = 2026 - userYearOfBirth;



if (userCity === kyiv ? null : alert('Шкода що ти не сказав якого ти року народження...(')) {
    alert(`Ви проживаєте в столиці України. Тобі ${userAge} років`);
} else if (userCity === vashington ? null : alert('Шкода що ти не сказав з якого ви міста...(')) {
    alert(`Ви проживаєте в столиці Америки. Тобі ${userAge} років`);
} else if (userCity === london ? null : alert('Шкода що ти не сказав який твій улюблений спорт...(')) {
    alert(`Ви проживаєте в столиці Великої Британії. Тобі ${userAge} років`);
} else {
    alert('Ти живеш в чудовій країні.');
}

switch(userSport) {
    case 'мма':
        alert(`Хочеш стати як ${mma}?`);
        break;
    case 'баскетболл':
        alert(`Хочеш стати як ${basketball}?`);
        break;
    case 'футбол':
        alert(`Хочеш стати як ${football}?`)
}