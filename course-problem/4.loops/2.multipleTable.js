function printMultipleTable(number) {
    const table = [];
    for (let i = 1; i <= 10; i++) {
        table.push([`${number} * ${i} = ${number * i}`])
    }
    return table;
}

const number = Number(prompt("Enter any Number:"));
console.log(printMultipleTable(number));