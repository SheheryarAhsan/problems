function Car(company, model, price) {
    if(!new.target) {
        throw new Error(`Car must be called with "new" keyword.`);
    }
    this.company = company;
    this.model = model;
    this.carPrice = price;
    this.features = function() {
        return `${this.company} offers ${this.model} with many features.`;
    }
}

const car_1 = new Car("Sazuki", "Swift");
const car_2 = new Car("Honda", "Civic");

// console.log(car_1);
// console.log(car_2);
// console.log(car_2.features());

// Constructor and Prototype

Car.prototype.price = function() {
    return `${this.company}'s ${this.model} price is ${this.carPrice}Laks.`;
}

const car_3 = new Car("Sazuki", "Swift", 60);
// console.log(car_3.price());

const car_4 = Car("Sazuki", "Mehran");
console.log(car_4.features());