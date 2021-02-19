const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const path = require('path')
const Manager = require('./util/Manager')
const Intern = require('./util/Intern')
const Engineer = require('./util/Engineer')
const generate = require('./src/templates')

const writeFileAsync = util.promisify(fs.writeFile)
const output = path.resolve(__dirname, 'output')
const outputPath = path.join(output, "team.html")



const team = []

function manager() {
    inquirer.prompt([
        {
            type: "Input",
            message: "Enter the team manager's name",
            name: "managerName"

        },
        {
            type: "Input",
            message: "Enter the team manager's ID",
            name: "managerID"

        },
        {
            //need to verify that users input is valid "Error: Must enter valid email address"
            type: "Input",
            message: "Enter the team manager's email",
            name: "email",
            validate: function (email) {
                const valid = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                if (valid) {
                    return true
                } return "Error: Must enter a valid email"
            }
        },
        {
            //need to verify that users input is valid cannot enter letters should be #'s only
            type: "Input",
            message: "Enter the team manager's office number",
            name: "officeNumber",
            validate: function (officeNumber) {
                // let officeNumber = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                const valid = officeNumber.match(/[0-9]/g)
                if (valid) {
                    return true //this returned the error message when the input matched the ABCabc
                } return "Error: Must enter valid office number"

                // if (officeNumber === string) {
                //     return "Error: Must enter valid office number"
                // }
                // const valid = officeNumber.match(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
                // if (valid) {
                //     return tr
                // } return
            }
        }]).then(answer => {
            const manager = new Manager(answer.officeNumber, answer.email, answer.managerId, answer.managerName)
            team.push(manager)
            addMember()
        })
}
function addMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberAdded",
            message: "Which team member would you like to add?",
            choices: ["Intern", "Engineer", "Manager", "I am done"]
        }
    ]).then(choice => {
        switch (choice.memberAdded) {
            case "Intern":
                addIntern()
                break;
            case "Engineer":
                addEngineer()
                break;
            case "Manager":
                manager()
                break;
            default:
                generateTeam()
        }
    })
}
//create intern, engineer functions here

function generateTeam() {
    if (!fs.existsSync(output)) {
        fs.mkdirSync(output)
    }
    writeFileAsync(outputPath, generate(team), "utf-8")
}
manager()

