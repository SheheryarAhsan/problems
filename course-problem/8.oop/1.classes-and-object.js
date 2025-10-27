/* Prototypal Chain */

function Car(company, model, price) {
    this.company = company;
    this.model = model;
}

Car.prototype.features = function () {
    return `${this.company} offers ${this.model} with many features.`;
}

const car_1 = new Car("Sazuki", "Swift", 60);
// console.log(car_1.features());
// console.log(car_1.company);

class Vehicles {
    constructor(company, model, price) {
        this.company = company;
        this.model = model;
        this.price = price;
    }

    price() {
        return `${this.company}'s ${this.model} price is ${this.carPrice}Laks.`;
    }
}

/* Inheritance */
class NewCar extends Vehicles {
    features() {
        return `${this.company} Inherits ${this.model} with many features.`;
    }
}

const car_2 = new NewCar("Honda", "Civic", 100);
// console.log(car_2.features());

/* Encapsulation (restricting direct access to object data) */
class BankAccount {
    #blance = 100; // private

    deposit() {
        this.#blance += amount;
        return this.#blance;
    }

    getBalance() {
        return `$${this.#blance}`
    }
}

let account = new BankAccount();
// console.log(account.getBalance());

/* Abstraction */
class CoffeeMachine {
    start() {
        // call DB
        // filter value
        return `Starting the machine`;
    }

    brewCoffee() {
        // complex calculations
        return `Brewing the coffee`;
    }

    pressStart() {
        const msg_1 = this.start();
        const msg_2 = this.brewCoffee();
        return `${msg_1}\n${msg_2}`;
    }
}

const myMachine = new CoffeeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStart());

/* Polymorphism */
class Bird {
    fly() {
        return `Birds Flying...`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't Flying...`;
    }
}

const newBird = new Bird();
const newPenguin = new Penguin();
// console.log(newBird.fly());
// console.log(newPenguin.fly());

/* Static Method */
class Calculator {
    static add(a, b) { // Only class itself can call them
        return a + b;
    }
}

const miniCal = new Calculator();
// console.log(miniCal.add(2, 3));
// console.log(Calculator.add(2, 3));

/* Getters and Setters */
class Employee {
    #salary;
    constructor(name, salary) {
        if(salary < 0) {
            throw new Error("Salary Can't be negative value.");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return `Can't access Salary.`;
    }

    set salary(value) {
        if(value < 0) {
            return `Salary can't be negative`;
        }
        else {
            this.salary = value;
        }
    }
}

const emp = new Employee("Sherry", 100000);
console.log(emp.salary);
// console.log(emp._salary);
// emp.salary = 600000;
