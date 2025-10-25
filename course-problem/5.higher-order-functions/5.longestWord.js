const findLongestWord = (arr) => arr.reduce((long, curr) => curr.length > long.length ? curr : long, "");

const array_1 = ['apple', 'banana', 'cherry'];
const array_2 = ['one', 'two', 'three', 'four'];
const array_3 = ['a', 'ab', 'abc', 'abcd'];

console.log(findLongestWord(array_1));
console.log(findLongestWord(array_2));
console.log(findLongestWord(array_3));
