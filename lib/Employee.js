// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;

        // Employee.lastId++;
        // this.id = Employee.lastId;
    }

    getName() {
        return this.name
    }



}



module.exports = Employee;




