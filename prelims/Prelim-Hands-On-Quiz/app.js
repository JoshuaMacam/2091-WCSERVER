//Joshua Emmanuel Macam
//WD-201

const calc = require('./calculation.js');

console.log('addition 2 + 2 = ', calc.add(2, 2));
console.log('subtract 5 - 2 = ', calc.subtract(5, 2));
console.log('multiply 3 * 2 = ', calc.multiply(3, 2));
console.log('divide 10 / 2 = ', calc.divide(10, 2));
console.log();

const Rate = 300;
const hoursWork = 4;
const daysPerWeek = 6;
const grossIncome = Rate * hoursWork * daysPerWeek;

console.log('Rate per hour', Rate);
console.log('Hours Worked', hoursWork);
console.log('Days per week', daysPerWeek);
console.log('Gross Income', grossIncome);
console.log();

const tax = calc.multiply(grossIncome, 0.1);
const sss = 1200;
const pagibig = 300;
const philhealth = 400;
const deductions = tax + sss + pagibig + philhealth;
const netSalary = calc.subtract(grossIncome, deductions);

console.log('Tax ', tax);
console.log('SSS: ', sss);
console.log('PAGIBIG: ', pagibig);
console.log('PhilHealth: ', philhealth);
console.log('Deductions: ', deductions);
console.log('Net Salary: ', netSalary);
console.log();
