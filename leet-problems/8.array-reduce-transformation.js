/* Given an integer array nums, a reducer function fn, and an initial value init, return the final 
result obtained by executing the fn function on each element of the array, sequentially, passing in 
the return value from the calculation on the preceding element.
This result is achieved through the following operations: val = fn(init, nums[0]), 
val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has 
been processed. The ultimate value of val is then returned.
If the length of the array is 0, the function should return init.
Please solve it without using the built-in Array.reduce method. */

function fn(accumulator, currentValue) {
    return accumulator + currentValue;
}

var reduce = function(nums, callback, init) {
    let val = init;
    if (nums.length === 0) return init;
    for(let i=0; i<nums.length; i++) {
        val = callback(val, nums[i]);
    }
    console.log(val);
    return val;
};

let num = [0, 10, 20, 30];
reduce(num, fn, 0);

// Time Complexity: O(n)
// Space Complexity: O(1)