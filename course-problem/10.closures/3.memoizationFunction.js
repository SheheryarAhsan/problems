function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if(cache[key]) {
            return cache[key];
        }
        else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
        
    }
}
let callCount = 0;
const sum = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});
console.log(sum(2, 3));
console.log(sum(2, 3));