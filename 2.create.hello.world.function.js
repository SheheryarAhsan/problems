// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = function() {
    return () => "Hello World";
};

const f = createHelloWorld();
f();
console.log(f()); // "Hello World"

// Time Complexity: O(1)
// Space Complexity: O(1)