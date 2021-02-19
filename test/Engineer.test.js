const Engineer = require('../util/Engineer')
const Employee = require('../util/Employee')

it('should create github variable and value', () => {
    const testValue = "someUser"
    const test = new Engineer("Stephen", 12, "stephen@stephen.com", testValue)
    expect(test.github).toEqual(testValue)
})

describe('getRole', () => {
    it('should return the value of engineer', () => {
        const testValue = 'Engineer'
        const test = new Engineer("Stephen", 12, "stephen@stephen.com", testValue)
        expect(test.getRole()).toEqual(testValue)
    })
})
describe('getGithub', () => {
    it('should return the value of the github account ', () => {
        const testValue = 'someUser'
        const test = new Engineer("Stephen", 12, "stephen@stephen.com", testValue)
        expect(test.getGithub()).toEqual(testValue)
    })
})