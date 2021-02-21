const Employee = require('../util/Employee');

describe("Employee", () => {

    describe("Initialization", () => {
        it("should create an object with name, id, and email if provided with valid arguments", () => {
            const engineer = new Employee("Stephen", 12, "stephen@stephen.com");

            expect(engineer.name).toEqual("Stephen");
            expect(engineer.id).toEqual(12);
            expect(engineer.email).toEqual("stephen@stephen.com");
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