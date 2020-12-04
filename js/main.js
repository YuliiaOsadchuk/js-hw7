const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};

function getMyTaxes(salary) {
    return +(salary * this.tax).toFixed(2);
}

function getMiddleTaxes() {
    return +(this.middleSalary * this.tax).toFixed(2);
}

function getTotalTaxes() {
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}

function getMySalary() {
    const minSalary = 1500;
    const maxSalary = 2000;
    const salary = getRandomSalary(minSalary, maxSalary);
    const taxes = getMyTaxes.call(this, salary);
    const profit = salary - taxes;
    return { salary: +salary, taxes: +taxes, profit: +profit };
}
const getRandomSalary = (minSalary, maxSalary) => {
    return Math.floor(minSalary + Math.random() * (maxSalary + 1 - minSalary));
}

console.log(getMyTaxes.call(ukraine, 1000));
console.log(getMiddleTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));
const timeInterval = 10000;
setInterval(function() {
    console.log(getMySalary.call(ukraine));
}, timeInterval);