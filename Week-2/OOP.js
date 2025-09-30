//a bit of refresher on OOP in JS

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    speak() {
        console.log(`I am ${this.name}`);
    }
}

class Dog extends Animal { //the extends keyword is used to create a class as a child of another class
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }
};

//make sure to use a non-arrow function so it can find the this keyword because arrow fuunctions dont have scope for this
const car = {
    brand: 'lamborghini',
    getBrand() {
        return this.brand;
    }
}


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) { //static methods are called on the class itself not on instances of the class
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
    getCoords() {
        return `(${this.x}, ${this.y})`;
    }
}
