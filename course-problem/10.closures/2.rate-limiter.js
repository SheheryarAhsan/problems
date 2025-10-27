
function rateLimiter(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();

        if(now - lastCall < limit) {
            return `Rate Limit Exceeded`;
        }
        else {
            lastCall = now;
            return fn(...args);
        }
    }
}

function fn(...args) {
    return args.reduce((a, b) => a + b, 0);
}

const limitFn = new rateLimiter(fn, 1000);
console.log(limitFn(1, 2));
console.log(limitFn(2, 3));
