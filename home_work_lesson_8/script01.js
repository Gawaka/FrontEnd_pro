
function getSum(param) {
    let total = 0;

    return function(value) {
        return total = total + value
    }
};

const sum = getSum();

console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));
