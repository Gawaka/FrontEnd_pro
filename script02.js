
const userNumber = prompt('Введіть трьохзначне число.');
const arrNumber = userNumber.split('');

if (arr[0] === arr[1] && arr[1] === arr[2]) {
    alert('Всі цифри однакові.')
} else if (arr[0] === arr[1] || arr[1] === arr[2] || arr[0] === arr[2]) {
    alert('Є однакові цифри.')
} else {
    alert('Всі цифри різні.');
}