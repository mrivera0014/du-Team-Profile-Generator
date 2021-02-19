const Manager = require('../util/Manager');
const Employee = require('../util/Employee')

it('should create officeNumber variable and value', () => {
    const testValue = 10
    const testing = new Manager("Stephen", 12, "stephen@stephen.com", testValue)
    expect(testing.officeNumber).toEqual(testValue)
})

describe("getRole", () => {
    it('should return the value of manager', () => {
        const testValue = 'Manager'
        const test = new Manager("Stephen", 12, "stephen@stephen.com", testValue)
        expect(test.getRole()).toEqual(testValue)
    })
})
describe("getOfficeNumber", () => {
    it('should return the value of officeNumber', () => {
        const testValue = 10
        const testing = new Manager("Stephen", 12, "stephen@stephen.com", testValue)
        expect(testing.officeNumber).toEqual(testValue)
    })
})
