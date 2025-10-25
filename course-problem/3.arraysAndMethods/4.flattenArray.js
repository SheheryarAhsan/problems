function flattenArray(array) {
    return array.flat(Infinity);
}

const array_1 = [1, [2, 3], [4, [5]]];
const array_2 = [6, [7, 8], [9, [10]]];
console.log(flattenArray(array_1));
console.log(flattenArray(array_2));