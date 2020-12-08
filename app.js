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

const writeFile = util.promisify(fs.writeFile);

employees = []


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

function init() {

    addEmployee()

}
init();

function addEmployee() {
    inquirer
        .prompt(anotherEmployee)


        .then((data) => {
            if (data.moreEmployees === "yes") {
                askEmployee()
            } else {
                console.log("Must enter at least one Employee")
            }
        })

        .catch((err) => console.log(err));


}


function askEmployee() {

    inquirer
        .prompt(employeeQuestions)
        .then((data) => {

            employee = data

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

            employee = new Manager(employee.name, employee.id, employee.email, data.officeNumber)

            employees.push(employee)

            inquirer
                .prompt(anotherEmployee)

                .then((data) => {
                    if (data.moreEmployees === "yes") {
                        askEmployee()
                    } else {

                        writeHTML()

                    }
                })

                .catch((err) => console.log(err));


        })

        .catch((err) => console.log(err));
}



function askIntern() {
    inquirer
        .prompt(intern)
        .then((data) => {

            employee = new Intern(employee.name, employee.id, employee.email, data.school)
            employees.push(employee)
            inquirer
                .prompt(anotherEmployee)


                .then((data) => {
                    if (data.moreEmployees === "yes") {
                        askEmployee()
                    } else {
                        writeHTML()
                    }
                })
                .catch((err) => console.log(err));


        })
        .catch((err) => console.log(err));
}

function askEngineer() {
    inquirer
        .prompt(engineer)
        .then((data) => {

            employee = new Engineer(employee.name, employee.id, employee.email, data.github)
            employees.push(employee)

            inquirer
                .prompt(anotherEmployee)


                .then((data) => {
                    if (data.moreEmployees === "yes") {
                        askEmployee()
                    } else {
                        writeHTML()
                    }
                })

                .catch((err) => console.log(err));


        })
        .catch((err) => console.log(err));
}

function writeHTML() {
    allEmployees = render(employees)
    writeFile("team.html", allEmployees)
        .then(() => console.log("html written"))
        .catch((err) => console.log(err));
    return writeFile("team.html", allEmployees)
}

