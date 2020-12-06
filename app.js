const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const util = require("util");
// const makeManager = util.promisify(fs.writeFile);
// const ManagerHTML = require("./templates/manager.html")
const makeManager = util.promisify(fs.readFile);


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// const testEmployee = {}

const anotherEmployee = [
    {
        type: "list",
        name: "moreEmployees",
        message: "Add an employee:",
        choices: ["yes", "no"]
    }
]

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "Employee's Name:"
    },
    {
        type: "input",
        name: "id",
        message: "Employee's ID:",
    },
    {
        type: "input",
        name: "email",
        message: "Employee's Email:",
    },
    {
        type: "list",
        name: "role",
        message: "Employee's Role:",
        choices: ["Manager", "Engineer", "Intern"]
    },


];

const managerQuestion = [
    {
        type: "input",
        name: "officeNumber",
        message: "Office Number: ",
    },
]


const engineer = [
    {
        type: "input",
        name: "github",
        message: "GitHub Username: ",
    },
]

const intern = [
    {
        type: "input",
        name: "school",
        message: "Current School: ",
    },
]


// function init() {
//     inquirer
//         .prompt(newEmployee)


//         .then((data) => {
//             if (data.newEmployee === "yes") {

//                 inquirer
//                     .prompt(employee)
//                     .then((data) => {
//                         // console.log(data)
//                         testEmployee = data
//                         console.log(testEmployee)
//                         // console.log(Employee.data)
//                         if (data.role === "Manager") {
//                             inquirer
//                                 .prompt(manager)
//                                 .then((data) => {
//                                     console.log(data)
//                                     testEmployee.officeNumber = data
//                                     console.log(testEmployee)

//                                 })
//                                 .catch((err) => console.log(err))

//                         }
//                         if (data.role === "Engineer") {
//                             console.log("Engineer")
//                             inquirer
//                                 .prompt(engineer)

//                         }
//                         if (data.role === "Intern") {
//                             console.log("Intern")
//                             inquirer
//                                 .prompt(intern)
//                         }
//                     })
//             } else {
//                 render()
//             }
//         })

//         .catch((err) => console.log(err));

// }
// init();




function init() {
    inquirer
        .prompt(anotherEmployee)


        .then((data) => {
            if (data.moreEmployees === "yes") {
                askEmployee()
                // inquirer
                //     .prompt(employee)
                //     .then((data) => {
                //         // console.log(data)
                //         testEmployee = data
                //         console.log(testEmployee)
                //         if (data.role === "Engineer") {
                //             makeCompany("Company.html", testEmployee)
                //                 .then(() => console.log("Engineer Witten"))
                //                 .catch((err) => console.log(err));
                //             return makeCompany("Company.html", testEmployee)

                //             // return engineer.html
                //         }



                // if (data.role === "Engineer") {
                //     console.log("Engineer")
                //     inquirer
                //         .prompt(engineer)

                // }

                // if (data.role === "Intern") {
                //     console.log("Intern")
                //     inquirer
                //         .prompt(intern)
                // }

                // })
            } else {
                render()
            }
        })

        .catch((err) => console.log(err));

}
init();


function askEmployee() {

    inquirer
        .prompt(employeeQuestions)
        .then((data) => {

            const newEmployee = new Employee(data.name, data.id, data.email)
            console.log(newEmployee)
            // testEmployee = data
            // console.log(testEmployee)
            if (data.role === "Manager") {
                askManager()
            }

            if (data.role === "Intern") {
                askIntern()
            }

            if (data.role === "Engineer") {
                askEngineer()
            }

        })
        .catch((err) => console.log(err));
}

function askManager() {
    inquirer
        .prompt(managerQuestion)
        .then((data) => {
            managerOffice = data
            console.log(managerOffice)
            // const newEmployee = new Employee(data.name, data.id, data.email)
            // console.log(newEmployee)
            // console.log(testEmployee)
            // console.log(newEmployee)
            // const manager = new Manager(testEmployee.name, testEmployee.id, testEmployee.email, data.officeNumber);
            // console.log(manager)
        })
        // .then(render(manager))
        .catch((err) => console.log(err));
}


function askIntern() {
    inquirer
        .prompt(intern)
        .then((data) => {
            internSchool = data
            console.log(internSchool)
            console.log(testEmployee)
        })
        .catch((err) => console.log(err));
}

function askEngineer() {
    inquirer
        .prompt(engineer)
        .then((data) => {
            engineerGithub = data
            console.log(engineerGithub)
            console.log(testEmployee)
        })
        .catch((err) => console.log(err));
}

// function createEmployee(){
//     inquirer
//     .prompt(employee)
//     .then((data) => {
//         // console.log(data)
//         testEmployee = data
//         console.log(testEmployee)
//         if (data.role === "Manager") {
//             inquirer
//                 .prompt(manager)
//                 .then((data) => {
//                     console.log(data)
//                     testEmployee.append(data)
//                     console.log(testEmployee)

//                 })
//                 .catch((err) => console.log(err))

//         }
//         if (data.role === "Engineer") {
//             console.log("Engineer")
//             inquirer
//                 .prompt(engineer)

//         }
//         if (data.role === "Intern") {
//             console.log("Intern")
//             inquirer
//                 .prompt(intern)
//         }
//     })

// }