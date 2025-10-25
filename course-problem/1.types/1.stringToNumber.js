function stringToNumber(string) {
    const number = Number(string);

    if(isNaN(number)) {
        return "Not a number";
    }
    return number;
}

const string = prompt("Enter any string:");
console.log(stringToNumber(string));