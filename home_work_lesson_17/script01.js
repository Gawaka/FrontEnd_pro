
class Calculator {
    addition(a, b) {
        return a + b;
    };

    subtract(a, b) {
        return a - b;
    ;}

    multiply(a, b) {
        return a * b;
    };

    divide(a, b) {
        if (b === 0) {
            return 'На нуль ділити не можна'
        }

        return a / b;
    };
};

const calc = new Calculator();

console.log(calc.addition(5, 3));
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 6));
console.log(calc.divide(8, 2));