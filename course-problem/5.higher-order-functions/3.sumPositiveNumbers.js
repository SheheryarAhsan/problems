const sumPositiveNumbers = (array) => array.filter(num => num > 0).reduce((acc, currValue) => acc + currValue, 0);

const array_1 = [1, -2, 3, 4, -5];
const array_2 = [-1, -2, -3];
const array_3 = [10, 20, 30];

console.log(sumPositiveNumbers(array_1));
console.log(sumPositiveNumbers(array_2));
console.log(sumPositiveNumbers(array_3));