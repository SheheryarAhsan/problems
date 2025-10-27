function rangeIterator(start, end) {
    let current = start;
    return {
        next: function() {
            if(current <= end) {
                return {value: current++, done: false};
            }
            else {
                return {value: undefined, done: true};
            }
        }
    };
}

const iterator = rangeIterator(1,3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());