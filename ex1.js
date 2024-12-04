const num = 30;

const divisibleBy2 = num % 2 === 0;
const divisibleBy3 = num % 3 === 0;
const divisibleBy5 = num % 5 === 0;


const isDivisibleBy2 = Number(divisibleBy2);
const isDivisibleBy3 = Number(divisibleBy3);
const isDivisibleBy5 = Number(divisibleBy5);

const result = isDivisibleBy2 + isDivisibleBy3 + isDivisibleBy5;

console.log(result);
