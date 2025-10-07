// Write a function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = function(...args) {
    return args.length;
};

argumentsLength(1, 2, 3); // 3

// Time Complexity: O(1) → just returning .length.
// Space Complexity: O(n) → because the args array is created to hold all n arguments.