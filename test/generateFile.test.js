const Employee = require('../util/generateFile');

describe("Employee", () => {

    describe("Initialization", () => {
        it("should create an object with name, id, and email if provided with valid arguments", () => {
            function engineer() { new Employee("Stephen", 12, "stephen@stephen.com") }
            console.log(engineer)
            expect(engineer.name).toEqual("Stephen")
            expect(engineer.id).toEqual(12)
            expect(engineer.email).toEqual("stephen@stephen.com")

        })

        it("should throw error if no arguments are provided", () => {
            const error = () => new Employee();

            expect(error).toThrow();
        })
    })
})