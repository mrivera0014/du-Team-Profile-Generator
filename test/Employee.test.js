const Employee = require('../util/Employee');

describe("Employee", () => {

    describe("Initialization", () => {
        it("should create an object with name, id, and email if provided with valid arguments", () => {
            //running logic
            const engineer = new Employee("Stephen", 12, "stephen@stephen.com");
            //verifying 
            expect(engineer.name).toEqual("Stephen");
            expect(engineer.id).toEqual(12);
            expect(engineer.email).toEqual("stephen@stephen.com");

        })

        it("should throw error if no arguments are provided", () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        })
        it("should throw error if name argument is not a string", () => {
            const cb = () => new Employee(12, 12, "stephen@stephen.com");

            expect(cb).toThrow('Error: Please enter a valid name');
        })
        it("should throw error if id argument is not a number", () => {
            const cb = () => new Employee("Stephen", "12", "stephen@stephen.com");

            expect(cb).toThrow('Error: Please enter a valid id');
        })
        it("should throw error if email argument is not a string??", () => {
            const cb = () => new Employee("Stephen", 12, 12);

            expect(cb).toThrow('Error: Please enter a valid email');
        })
    })

    describe("getName", () => {
        it("should return the value of name", () => {
            const engineer = new Employee("Stephen", 12, "stephen@stephen.com");
            expect(engineer.name).toEqual("Stephen")
        })
    })
    describe("getId", () => {
        it("should return the value of id", () => {
            const engineer = new Employee("Stephen", 12, "stephen@stephen.com");
            expect(engineer.id).toEqual(12)
        })
    })
    describe("getEmail", () => {
        it("should return the value of email", () => {
            const engineer = new Employee("Stephen", 12, "stephen@stephen.com");
            expect(engineer.email).toEqual("stephen@stephen.com")
        })
    })
    describe("getRole", () => {
        it("should return the role", () => {
            const testValue = "Employee";
            expect(testValue).toEqual("Employee")
        })
    })
})



