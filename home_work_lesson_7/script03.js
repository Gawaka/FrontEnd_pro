
const myArray = [1, 3, 4, 6, 2, 5, 7];

function removeElement(arr) {
    const result = [];

    for (let el of arr) {
        if (el !== 4) {
            result.push(el)
        }
    }

    return(
        console.log(result)
    )
};

removeElement(myArray);