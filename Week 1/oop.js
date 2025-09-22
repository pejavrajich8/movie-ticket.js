class Employee {
    //public properties
    firstname;
    lastname;
    //private properties
    #salery;

    constructor(firstName, lastName, salery) {
        this.#salery = salery
        this.firstname = firstName;
        this.lastname = lastName;
    }
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
    
    set salery(newSalery) {
        if (newSalery < 0) {
            console.error("Salery cant be negative")
            return;
        }
        this.#salery = newSalery
    }

    get salery() {
        return this.#salery
    }
};

const newEmployee = new Employee('peja', 'vrajich', '100000')