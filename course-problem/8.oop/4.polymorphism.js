class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(raduis) {
        super();
        this.raduis = raduis;
    }
    area() {
        const area = Math.PI * (this.raduis * this.raduis);   /* A=πr */
        return `Circle: ${area}`;
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    area() {
        const area = this.width * this.length;   /* A=wl */
        return `Rectangle: ${area}`;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const shape = new Shape();

console.log(circle.area());
console.log(rectangle.area());
console.log(shape.area());
