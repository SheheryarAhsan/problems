/* Write a function createCounter. It should accept an initial integer init. It should return an 
object with three functions.
The three functions are:
increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it. */

var createCounter = function(init) {
    let current = init;
    return {
        increment: () => ++current,
        decrement: () =>  --current,
        reset: () => (current = init)
    };
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

console.log("Increment",counter.increment());
console.log("Increment",counter.increment());
console.log("Reset",counter.reset());
console.log("Decrement",counter.decrement());
console.log("Decrement",counter.decrement());

// Time Complexity: O(1)
// Space Complexity: O(1)