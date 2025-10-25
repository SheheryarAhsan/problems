function flipBoolean(input) {
    return !Boolean(input);
}

const input = prompt("Enter any string:");
console.log(flipBoolean(input));