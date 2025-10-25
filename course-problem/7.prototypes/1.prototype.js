let computer = {
    cpu: "R5 3600",
    ram: 16
}
let dell = {
    name: "inspiron",
    __proto__: computer
}
let asus = {
    GPU: "RTX 2060"
}

Object.setPrototypeOf(asus, computer);

console.log("Computer:", computer);
console.log("Dell:", dell);
console.log("Asus:", asus);
console.log("Asus 2:", Object.getPrototypeOf(asus));