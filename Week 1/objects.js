const person = {
    name: "John",
    lastName: "Doe",
    age: 30,

    get fullName() {
        return `${this.name} ${this.lastName}`;

    },

    getAge() {
        return this.age;
    },
};

person.fullName // "John Doe"

person.getAge() // 30







//car object

const car = {
    make: "Laborghini",
    model: "Aventador SVJ",
    year: 2018,
    color: "green",
    mileage: 10000,
    engine: {
        type: "V12",
        horsepower: 770,
        torque: 530,
        topSpeed: 217,
        acceleration: 2.9,
        transmission: "7-speed automatic",
        clutchType: "Dual-clutch",
        driveType: "Rear-wheel drive",
        suspensionType: "Adaptive suspension",
        brakingSystem: "Carbon ceramic brakes",
        steeringType: "Rear-wheel steering",
        
    }, 
    //getter
    getHorsepower: function() {
        return this.engine.horsepower;
    }, 
//setter
    setMake: function(make) {
        this.make = make;
    },
//same as above but using a setter
   
};
//accessing properties
car.getHorsepower(); // 770
car['make'] // "Laborghini"
car.model // "Aventador SVJ"
car.year // 2018
car.color // "green"
car.mileage // 10000
car.engine.type // "V12"
car.engine.horsepower // 770
car.engine.torque // 530
car.engine.topSpeed // 217
car.engine.acceleration // 2.9
car.engine.transmission // "7-speed automatic"

let prop = 'make';
car.prop //undefined
car[prop] //"Laborghini"
//looping through properties
for (let prop in car) {
    console.log(car[prop]);
}


