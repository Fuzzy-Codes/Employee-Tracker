const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeeTracker_db"
});

db.connect(function (err) {
    if (err) throw err
    console.log("MySQL Connected")
    prompt();
});

function prompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'promptMenu',
                message: 'What would you like to do?',
                choices: ['View all Departments', 'View all Roles', 'View all Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee', 'Quit']
            }]).then((data) => {
                let answer = data.promptMenu;
                if (answer === 'View all Departments') {
                    allDepartments()
                }
                else if (answer === 'View all Roles') {
                    allRoles()
                }
                else if (answer === 'View all Employees') {
                    allEmployees()
                }
                else if (answer === 'Add Department') {
                    addDepartment()
                }
                else if (answer === 'Add Role') {
                    addRole()
                }
                else if (answer === 'Add Employee') {
                    addEmployee()
                }
                else if (answer === 'Update Employee') {
                    updateEmployee()
                }
            })
}

function allDepartments() {

}

function allRoles() {

}

function allEmployees() {

}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateEmployee() {

};