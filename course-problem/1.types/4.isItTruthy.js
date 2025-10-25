function isItTruthy(input) {
    if (input) {
        return "Truthy"
    }
    else {
        return "Falsy";
    }
}

console.log(isItTruthy("ABC"));
console.log(isItTruthy(123));
console.log(isItTruthy(null));
console.log(isItTruthy(undefined));
console.log(isItTruthy(false));
console.log(isItTruthy(NaN));
console.log(isItTruthy(0));
console.log(isItTruthy(-0));
console.log(isItTruthy(0n)); // BigInt
console.log(isItTruthy("")); // BigInt
console.log(isItTruthy(document.all));