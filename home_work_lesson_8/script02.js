
function getCalculate(a) {
    
    return function(b) {
        return a + b
    }
};

console.log(getCalculate(5)(2));
