// Const for the Employee javascript file
const Employee = require("./Employee")


// Class Manager extends Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = "Manager"
        this.officeNumber = officeNumber
    }
    // Method for get office Number
    getOfficeNumber() {
        return this.officeNumber
    }

}
// Export the data
module.exports = Manager