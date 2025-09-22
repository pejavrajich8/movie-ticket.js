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

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Dog");
        this.breed = breed;
    }
}
