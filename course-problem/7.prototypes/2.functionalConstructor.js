function Person(name, age) {
    if (age < 0) {
        throw new Error("Age is not a positive number.");
    }
    this.name = name;
    this.age = age;

    this.greet = function() {
        return `Hello my name is ${this.name} and my age is ${this.age}.`;
    }
}

const person = new Person("Sheheryar Ahsan", 27);
console.log(person.greet());