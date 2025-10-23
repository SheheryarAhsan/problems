var TimeLimitedCache = function () {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
    if (this.cache.has(key)) {
        return this.cache.set(key, { value, expiry: Date.now() + duration }) ? true : false;
    }
};

TimeLimitedCache.prototype.get = function (key) {

};

TimeLimitedCache.prototype.count = function () {

};

const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1