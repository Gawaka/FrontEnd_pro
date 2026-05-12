
const n = +prompt('Введіть число: ');

for (let i = 1; i <= 100; i++) {
    if (i * i <= n) {
        console.log(i);
    }
}