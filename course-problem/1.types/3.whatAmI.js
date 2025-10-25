function whatAmI(input) {

    if (typeof input === "string") {
        return "I'm a String";
    }
    else if ((typeof Number(input)) === "number") {
        return "I'm a Number";
    }
    else {
        return "Not a primitive data type";
    }
}

console.log(whatAmI("ABC"));
console.log(whatAmI(123));
console.log(whatAmI("ABC123"));
