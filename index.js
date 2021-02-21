const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const path = require('path')
const Manager = require('./util/Manager')
const Intern = require('./util/Intern')
const Engineer = require('./util/Engineer')

const generate = require('./src/template')
const writeFileAsync = util.promisify(fs.writeFile)
const output = path.resolve(__dirname, 'output')
const outputPath = path.join(output, "team.html")

//team array -- user input will go in here
const team = []

//prompting questions for manager
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
            type: "Input",
            message: "Enter the team manager's email",
            name: "managerEmail",
            validate: function (email) {
                const valid = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                if (valid) {
                    return true
                } return "Error: Must enter a valid email"
            }
        },
        {
            type: "Input",
            message: "Enter the team manager's office number",
            name: "officeNumber",
            validate: function (officeNumber) {
                const valid = officeNumber.match(/[0-9]/g)
                if (valid) {
                    return true
                } return "Error: Must enter valid office number"
            }
        }]).then(answer => {
            const manager = new Manager(answer.officeNumber, answer.managerEmail, answer.managerId, answer.managerName)
            team.push(manager)
            addMember()
        })
}

//after manager questions will ask if they would like to add another member
function addMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberAdded",
            message: "Which team member would you like to add?",
            choices: ["Intern", "Engineer", "Manager", "I am done"]
        }
        //depending on chosen answer they will be lead to another series of question or be done
    ]).then(choice => {
        switch (choice.memberAdded) {
            case "Intern":
                intern()
                break;
            case "Engineer":
                engineer()
                break;
            case "Manager":
                manager()
                break;
            default:
                generateTeam()
        }
    })
}

function engineer() {
    inquirer.prompt([
        {
            type: "Input",
            message: "Enter the engineer's name",
            name: "engineerName"

        },
        {
            type: "Input",
            message: "Enter the team engineer's ID",
            name: "engineerID"

        },
        {
            type: "Input",
            message: "Enter the team manager's email",
            name: "engineerEmail",
            validate: function (email) {
                const valid = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                if (valid) {
                    return true
                } return "Error: Must enter a valid email"
            }
        },
        {
            type: "Input",
            message: "Enter the engineer's github username",
            name: "engineerGithub"
        },
    ]).then((answer) => {
        const engineer = new Engineer(answer.engineerEmail, answer.engineerId, answer.engineerName, answer.engineerGithub)
        team.push(engineer)
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
                intern()
                break;
            case "Engineer":
                engineer()
                break;
            case "Manager":
                manager()
                break;
            default:
                generateTeam()
        }
    })
}

function intern() {
    inquirer.prompt([
        {
            type: "Input",
            message: "Enter the intern's name",
            name: "internName"

        },
        {
            type: "Input",
            message: "Enter the team intern's ID",
            name: "internID"

        },
        {
            type: "Input",
            message: "Enter the intern's email",
            name: "internEmail",
            validate: function (email) {
                const valid = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
                if (valid) {
                    return true
                } return "Error: Must enter a valid email"
            }
        },
        {
            type: "input",
            message: "Enter is the intern's school",
            name: "internSchool"
        }
    ]).then(answer => {
        const intern = new Intern(answer.internEmail, answer.internId, answer.InternName, answer.internSchool)
        team.push(intern)
        addMember()
    })
}

function generateTeam() {
    if (!fs.existsSync(output)) {
        fs.mkdirSync(output)
    }

    writeFileAsync(outputPath, generate(JSON.stringify(team)), "utf-8")
    console.log("Document created")
}

manager()