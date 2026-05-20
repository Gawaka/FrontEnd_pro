
const myArray = ['Джон', 42, true, 7, 'піца з ананасами', NaN, 100, undefined];

function calcCrithmeticMean(arr) {
    let sum = 0;
    let count = 0;

    for (let el of arr) {
        if (typeof el === 'number' && !isNaN(el)) {
            sum += el;
            count++;
        }
    }
    
    const result = sum / count;

    console.log(`${sum} сума, ${count} кількість`);

    return console.log(result)
};

calcCrithmeticMean(myArray);