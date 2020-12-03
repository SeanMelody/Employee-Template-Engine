// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const inquirer = require("inquirer")
// const Employee = require("./Employee")

// const engineer = [
//     {
//         type: "input",
//         name: "github",
//         message: "GitHub Username: ",
//     },
// ]


// const Engineer = function (github) {
//     this.github = github

// }

// Employee.prototype.add = function (Engineer) {
//     this.github = github
// }


const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, role, GitHub) {
        super(role);
        this.GitHub = GitHub
    }

}


module.exports = Engineer