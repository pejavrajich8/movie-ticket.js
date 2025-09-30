class Person {
    constructor(name, position, department, email, phone, age, id) {
        this.name = name;
        this.position = position;
        this.department = department;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.id = id;
    }
    
};

class Position {
    constructor(title, level = 'Junior', responsibilities = []) {
        this.title = title;
        this.level = level;
        this.responsibilities = responsibilities;
    }
}

class Employee extends Person {
    constructor(name, position, department, email, phone, age, id, salary, hireDate) {
        super(name, position, department, email, phone, age, id);
        this.salary = salary;
        this.position = new Position(position);
        this.hireDate = new Date(hireDate);
    }

    getDetails() {
        return `${this.name} works as a ${this.position} in the ${this.department} department. 
        Contact: ${this.email}, Phone: ${this.phone}, Age: ${this.age}, ID: ${this.id}`;
    }

    toJSON() {
        return {
            name: this.name,
            position: this.position,
            department: this.department,
            email: this.email,
            phone: this.phone,
            age: this.age,
            id: this.id
        };
    }

    // Method to update person details
    update(details) {
        for (const key in details) {
            if (this.hasOwnProperty(key)) {
                this[key] = details[key];
            }
        }
    }

    isValidEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }

 makeVailidEmail(newEmail) {
        // Normalize input (prefer newEmail if provided)
        let candidate = (newEmail ?? this.email ?? '').toString().trim().toLowerCase();
        if (!candidate) return false;

        // Remove wrapping characters
        candidate = candidate.replace(/^<|>$/g, '').replace(/^"|"$/g, '');

        // If missing '@', append a sensible default domain
        if (!candidate.includes('@')) {
            candidate = `${candidate}@example.com`;
        }

        // If domain part exists but has no dot, append .com
        const parts = candidate.split('@');
        if (parts.length === 2 && !parts[1].includes('.')) {
            candidate = `${parts[0]}@${parts[1]}.com`;
        }

        // Use the same simple regex as isValidEmail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(candidate)) {
            this.email = candidate;
            return true;
        }

        return false;
    }

    isAdult() {
        return this.age >= 18;
    }

    getContactInfo() {
        return `Email: ${this.email}, Phone: ${this.phone}`;
    }

    getProfileSummary() {
        return `${this.name}, ${this.position} in ${this.department}. Contact: ${this.getContactInfo()}`;
    }

};

class Adress {
    constructor(street, city, state, zip, country) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.country = country;
    }
}

class Company {
    constructor(name, industry, employees = []) {
        this.name = name;
        this.industry = industry;
        this.employees = employees; // array of Employee objects
    }
    
    addEmployee(employee) {
        const emp = new Employee(employee.name, employee.position, employee.department, employee.email, employee.phone, employee.age, employee.id, employee.salary, employee.hireDate);
        this.employees.push(emp);
    }

    searchEmployeeByName(fullname) {
        return this.employees.find(emp => emp.name.toLowerCase() === fullname.toLowerCase());
    }


    getEmployeeCount() {
        return this.employees.length;
    }
    
}

const p1 = new Person("John Doe", "Software Engineer", "Development", "john.doe@example.com", "123-456-7890", 28, "JD001");
const p2 = new Person("Jane Smith", "Product Manager", "Marketing", "jane.smith@example.com", "098-765-4321", 34, "JS002");
