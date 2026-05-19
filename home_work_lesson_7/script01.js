
const arrSymbols = ['l', 'd'];

function removeSymbols(string, array) {
    let result = '';

    for (let letter of string) {
        let isForbidden = false;

        for (let symbol of array) {
            if (letter === symbol) {
                isForbidden = true;
            }
        }

        if (isForbidden === false) {
            result += letter
        }
    }

    return console.log(result);
};

removeSymbols('Hello world', arrSymbols);