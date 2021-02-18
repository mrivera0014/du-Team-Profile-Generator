const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')

const generateFile = require('./util/generateFile')
const writeFileAsync = util.promisify(fs.writeFile)

const questions = () => {
    return inquirer.prompt([
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
            // return email === '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'
        },
        {
            //need to verify that users input is valid cannot enter letters should be #'s only
            type: "Input",
            message: "Enter the team manager's office number",
            name: "officeNumber",
            validate: function (officeNumber) {
                // let officeNumber = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                const valid = officeNumber.match(/0123456789/g)
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
        },
        {
            //need an errCb to verify that users input is valid
            type: "List",
            message: "What type of team member would you like to add?",
            choices: ["Engineer", "Intern", "Done adding team members"],
            name: "managerEmail"
        },
        {
            //need an errCb to verify that users input is valid
            type: "Input",
            message: "Enter the team manager's email",
            name: "managerEmail"
        },
    ])
}

const init = () => {
    questions()
        .then((answer) => writeFileAsync('index.html', generateFile(answer)))
        .then(() => console.log('File Created.'))
        .catch((err) => console.log(err))
}

init()

// return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)