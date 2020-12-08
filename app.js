// Consts Required

// Consts for the different JavaScript Files Being Accessed
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Const for the HTML render file
const render = require("./lib/htmlRenderer");

// Consts for the required Node Modules

// Const for Inquier to prompt the question
const inquirer = require("inquirer");
// Const for the Path
const path = require("path");
// Const for FS to write the team.HTML file
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Const for the promises
const util = require("util");

// Const to write the File
const writeFile = util.promisify(fs.writeFile);

// Set Employees to an empty array
employees = []

// Question to see if the user wold like to add another Employee
const anotherEmployee = [
    {
        type: "list",
        name: "moreEmployees",
        message: "Add an employee:",
        choices: ["yes", "no"]
    }
]

// Array to get Basic Questions that pertain to the Employee Class
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

// Question to get the Manger's Office Number
const managerQuestion = [
    {
        type: "input",
        name: "officeNumber",
        message: "Office Number: ",
    },
]

// Question to get the Engineer's GitHub User Name
const engineer = [
    {
        type: "input",
        name: "github",
        message: "GitHub Username: ",
    },
]

// Question to get the Intern's School
const intern = [
    {
        type: "input",
        name: "school",
        message: "Current School: ",
    },
]

// Init Functino to start the program
function init() {
    // Call the Add Employee Function
    addEmployee()

}
init();

// Add Employee Function to add and Employee, and check to see if any have been added
function addEmployee() {
    // Inquirer Prompt to ask the AnotherEmployee Question
    inquirer
        .prompt(anotherEmployee)
        // Check if Yes or No, to add an Employee
        .then((data) => {
            if (data.moreEmployees === "yes") {
                // If Yes add an Employee, then run the Ask Employee Function to ask Employee Questions
                askEmployee()
            } else {
                // If "no" selected, console log that they must enter at least one employee
                console.log("Must enter at least one Employee")
            }
        })
        // Catch them Errors
        .catch((err) => console.log(err));
}

// Ask Employee Questions to get Name, Email, ID, and Role
function askEmployee() {
    // Prompt the Employee questions
    inquirer
        .prompt(employeeQuestions)
        // Read the data
        .then((data) => {

            employee = data

            // If statements to see what role is selected

            // If Manager is selected, prompt Manager Question(Office Number)
            if (data.role === "Manager") {
                askManager()
            }
            // If Intern is selcted, prompt Intern Question(Current School)
            if (data.role === "Intern") {
                askIntern()
            }
            // If Engineer is selected, prompt Engineer Question(GitHub Username)
            if (data.role === "Engineer") {
                askEngineer()
            }

        })
        // Catch Dem Errors
        .catch((err) => console.log(err));
}

// Manger Function to ask Manager Question
function askManager() {

    // Prompt the question
    inquirer
        .prompt(managerQuestion)
        .then((data) => {
            // Send the Data to the Manager Class
            employee = new Manager(employee.name, employee.id, employee.email, data.officeNumber)
            // Push the new Manger Data to the Employees Array
            employees.push(employee)
            // Prompt if the user would like to add another Employee
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

