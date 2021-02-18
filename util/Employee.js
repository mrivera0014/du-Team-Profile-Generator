class Employee {
    constructor(name, id, email,) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error('Error: Please enter a valid name');

        }
        if (typeof id !== "number" || id < 0 || isNaN(id)) {
            throw new Error('Error: Please enter a valid id');

        }
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error('Error: Please enter a valid email');

        }
        this.name = name;
        this.id = id;
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}
console.log(this.name)
module.exports = Employee;





// getRole()//needs to return employee

// const engineer = () => new Employee("Stephen", 12, "stephen@stephen.com")
// console.log(engineer.name)

// if (typeof name !== "string" || !name.trim().length) {
//     throw new Error("Expected parameter 'name' to be a non-empty string");


