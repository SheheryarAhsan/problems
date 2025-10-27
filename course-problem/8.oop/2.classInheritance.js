class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getdetails() {
        return `Make:${this.make},Model:${this.model}`;
    }

    move() {
        return `Vehicle is moving.`;
    }

    static isVehicle(obj) {
        return obj instanceof Vehicle;
    }
}


class Car extends Vehicle {
    startEngine() {
        return `Engine started`;
    }

    move() {
        return `Car is driving.`;
    }
}

const car_1 = new Car("toyota", "Corolla");
const vehicle = new Vehicle("Generic", "Model");

console.log(car_1.getdetails());
console.log(car_1.startEngine());
console.log(vehicle.move());
console.log(car_1.move());
console.log(Vehicle.isVehicle(car_1));
console.log(Vehicle.isVehicle({}));