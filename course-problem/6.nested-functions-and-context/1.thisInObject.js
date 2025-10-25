const person = {
    name: "Sheheryar Ahsan",
    age: 27,
    introduce() {
        return `Hi, my name is ${this.name} and i am ${this.age} years old.`;
    }
}

console.log(person.introduce());