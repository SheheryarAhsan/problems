function introduce(person) {
    return `Hi, my name is ${this.name}`;
}

const person_1 = { name: "Sheheryar Ahsan" };
const person_2 = { name: "Muneeb" };

console.log(introduce.call(person_1));
console.log(introduce.call(person_2));