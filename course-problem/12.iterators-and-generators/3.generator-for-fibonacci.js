function* fibonacciGenerator() {
    let a = 1, b = 1;
    yield a;
    yield b;
    while(true) {
        let next = a + b;
        yield next;
        a = b;
        b = next;
    }
}

const fbGen = fibonacciGenerator();
console.log(fbGen.next().value);
console.log(fbGen.next().value);
console.log(fbGen.next().value);
console.log(fbGen.next().value);
console.log(fbGen.next().value);
console.log(fbGen.next().value);