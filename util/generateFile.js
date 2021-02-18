class Employee {
    constructor(name, id, email,) {
        this.name = name;
        this.id = id;
        this.email = email

        if (typeof name !== String || typeof name !== "") {
            throw new Error("Error: Please enter a name")
        };
    }

}

module.exports = Employee;

    // getName() {
    //     return this.name
    // }

    // getId() {
    //     return this.id
    // }
    // getEmail() {
    //     return this.email
    // }
    // getRole()//needs to return employee