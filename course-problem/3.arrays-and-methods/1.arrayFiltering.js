function filterNumbers(array) {
    return array.filter((element) => typeof element === "number")
}
const array = [1, "2", {}, [4], 5, "6", true, 0, [9], 10];
console.log(filterNumbers(array));