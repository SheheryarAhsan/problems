/* Given an array arr and a chunk size size, return a chunked array.
A chunked array contains the original elements in arr, but consists of subarrays each of length size.
The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
Please solve it without using lodash's _.chunk function. */

var chunk = function (arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i+=size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
};

chunk([10, 2, 3, 4, 5], 2);

// Time Complexity: O(n)
// Space Complexity: O(n)