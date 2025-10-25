function outer() {
    function inner() {
    return "Inner function called";
    };
    return inner();
}

console.log(outer());