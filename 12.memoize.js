/* Given a function fn, return a memoized version of that function.
A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
You can assume there are 3 possible input functions: sum, fib, and factorial.
sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a)
 where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate 
 calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise. */

function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);
        if(cache.has(key) ) {
            console.log("Yes, already have passed arguments");
            return cache.get(key);
        }
        // console.log("Arguments are: ",args);
        let result = fn(...args);
        cache.set(key, result);
        console.log("Arguments: ",args," have result: ", result);
        return result;
    };
};

let callCount = 0;
const sum = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
sum(2, 3); // 5
sum(2, 3); // 5

/* Time Complexity
    Best case (cache hit): O(k)
    Worst case (cache miss): O(k) + cost of fn. 
   Space Complexity
    SC = O(m * k) (m = number of unique calls, k = size of arguments).*/