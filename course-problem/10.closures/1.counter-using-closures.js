function createCountre() {
    let count = 0;
    return function () {
        return ++count;
    };
}

const count = new createCountre()
console.log(count());
console.log(count());
console.log(count());