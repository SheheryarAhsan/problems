/* Given an integer array arr and a mapping function fn, return a new array with a transformation 
applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method. */

function fn(value, Index) {
    return { value, Index };
}

var map = function (arr, callback) {
    const arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        arrNew.push(callback(arr[i], i));
    }
    return arrNew;
};

arr = [1, 2, 3];
map(arr, fn);

// Time Complexity: O(n)
// Space Complexity: O(n)