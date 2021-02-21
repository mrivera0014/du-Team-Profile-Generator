const employee = require('../util/Employee')
const manager = require('../util/Manager')
const engineer = require('../util/Engineer')
const intern = require('../util/Intern')

const generate = team => {
    const generateManager =
        `
             <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>`

    const html = []
    html.push(team.filter(member => member.getRole() === "Manager").map(manager => generateManager(manager)))
}

module.exports = generate