/* Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until
 cancelFn is called at cancelTimeMs ms. */

var cancellable = function (fn, args, t) {
    fn(...args);
    const timer = setInterval(() => fn(...args), t);
    const cancelFn = () => clearInterval(timer);
    return cancelFn;
};

const result = [];

const fn = (x) => x * 2;
const args = [4], t = 35, cancelTimeMs = 190;

const start = performance.now();

const log = (...argsArr) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(...argsArr) });
}

const cancel = cancellable(log, args, t);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result);
}, cancelTimeMs + t + 15)

// Time complexity: O(1)
// Space complexity: O(1)
