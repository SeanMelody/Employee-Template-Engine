// Const for the Employee javascript file
const Employee = require("./Employee")

// Intern Extends Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = "Intern"
        this.school = school
    }
    // Method!
    getSchool() {
        return this.school
    }
}
// Export the data
module.exports = Intern