
let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
    development: {
        web: [{name: 'Peter', salary: 2000}, 
            {name: 'Alex', salary: 1800 }
        ],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function calcSalary(n) {
    const companyValues = Object.values(n);
    let salarysSum = 0;

    if (Array.isArray(n)) {
        const sum = n.reduce((accumulator, currentValue)=> {
            return currentValue.salary + accumulator;
        }, 0);
        return sum;
    };

    for (const salary of companyValues) {
        salarysSum += calcSalary(salary);
    };

    return salarysSum;
};

console.log(calcSalary(company));