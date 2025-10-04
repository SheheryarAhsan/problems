/* Write a function expect that helps developers test their code. It should take in any value val and 
return an object with the following two functions.
toBe(val) accepts another value and returns true if the two values === each other. If they are not 
equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are 
equal, it should throw an error "Equal". */

var expect = function (val) {
    return {
        toBe: (newVal) => {
            if (val === newVal) return true;
            throw new Error("Not Equal");
        },
        notToBe: (newVal) => {
            if (val !== newVal) return true;
            throw new Error("Equal");
        }
    };
};

try {
    expect(5).toBe(5); // true
    // console.log(expect(5).toBe(5)); // true
} catch (err) {
    console.error(err.message);
}
try {
    expect(5).notToBe(5); // throws "Equal"
    // console.log(expect(5).notToBe(5)); // throws "Equal"
} catch (err) {
    console.error(err.message);
}

// Time Complexity: O(1)
// Space Complexity: O(1)