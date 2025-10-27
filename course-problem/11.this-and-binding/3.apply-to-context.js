function sum(a, b) {
    return (a + b) * this.multiplyer;
}

const context_1 = {multiplyer: 2};
const context_2 = {multiplyer: 3};

console.log(sum.apply(context_1, [5,10]));
console.log(sum.apply(context_2, [5,10]));