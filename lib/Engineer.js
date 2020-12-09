// Const for the Employee javascript file
const Employee = require("./Employee")

// Engineer Extends Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = "Engineer"
        this.github = github
    }
    // Method!
    getGithub() {
        return this.github
    }

}
// Export the data
module.exports = Engineer