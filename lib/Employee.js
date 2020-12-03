// TODO: Write code to define and export the Employee class


// const Employee = function (name, id, email,) {
//     this.name = name;
//     this.id = id;
//     this.email = email;


// }

// class Engineer extends Employee {
//     constructor(role, GitHub) {
//         super(role);
//         this.GitHub = GitHub
//     }

// }

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

}

// class Engineer extends Employee {
//     constructor(name, id, email, gitHub) {
//         super(name, id, email);
//         this.gitHub = gitGub
//     }
// }


module.exports = Employee;




