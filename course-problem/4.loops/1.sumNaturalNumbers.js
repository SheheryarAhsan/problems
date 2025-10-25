function sumOfN(number) {
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}

const number = Number(prompt("Enter any Number:"));
console.log(sumOfN(number));