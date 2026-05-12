
const n = +prompt('Введіть число: ');
let check = true;

for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        check = false;
        break;
    }
}

console.log(check);