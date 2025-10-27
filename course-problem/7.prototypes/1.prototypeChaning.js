function Animal() {
};
Animal.prototype.speak = function () {
    return `Animal Speaking`;
};

function Dog() {
};
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
    return `Woof`;
}

Dog.prototype.constructor = Dog; //

const dog = new Dog();
console.log(dog.speak());
console.log(dog.bark());
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);
