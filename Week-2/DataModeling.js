// Model data for a company directory perosn class
class Person {
    constructor(name, position, department, email) {
        this.name = name;
        this.position = position;
        this.department = department;
        this.email = email;
    }

    getDetails() {
        return `${this.name} works as a ${this.position} in the ${this.department} department. Contact: ${this.email}`;
    }
}

