function removeDuplicates(array) {
    // let newArray = [];
    // for (const element of array) {
    //     if(!newArray.includes(element)) {
    //         newArray.push(element);
    //     }
    // }
    // return newArray;
    return [...new Set(array)];
}

const array_1 = [1, 2, 2, 3, 4, 4, 5];
const array_2 = [5, 5, 5, 5, 5];
console.log(removeDuplicates(array_1));
console.log(removeDuplicates(array_2));