// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.


// const Manager = function (officeNumber) {
//     this.officeNumber = officeNumber

// }

const Employee = require("./Employee")


class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(role);
        this.officeNumber = officeNumber
    }

}

module.exports = Manager