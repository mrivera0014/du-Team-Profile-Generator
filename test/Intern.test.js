const Intern = require('../util/Intern');
const Employee = require('../util/Employee')

it('should create school variable and value', () => {
    const testValue = "someSchool"
    const test = new Intern("Stephen", 12, "stephen@stephen.com", testValue)
    expect(test.school).toEqual(testValue)
})
describe("getRole", () => {
    it('should return the value of manager', () => {
        const testValue = 'Intern'
        const test = new Intern("Stephen", 12, "stephen@stephen.com", testValue)
        expect(test.getRole()).toEqual(testValue)
    })
})
describe('getSchool', () => {
    it('should return the value of the school ', () => {
        const testValue = 'someSchool'
        const test = new Intern("Stephen", 12, "stephen@stephen.com", testValue)
        expect(test.getSchool()).toEqual(testValue)
    })
})