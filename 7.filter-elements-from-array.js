/* Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
The fn function takes one or two arguments:
arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) 
evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
Please solve it without the built-in Array.filter method. */

function fn(value, index) {
    return Boolean(value);
}
var filter = function (arr, callback) {
    let filteredArray = [];
    for(let i=0; i<arr.length; i++) {
    if(callback(arr[i], i)) filteredArray.push(arr[i]);
    }
    return filteredArray;
};
let arr = [0, 10, 20, 30];
filter(arr, fn);

// Time Complexity: O(n) → must check each element once.
// Space Complexity: O(k) → where k = number of elements passing the filter (≤ n).