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
    db.query(`SELECT * FROM department`,
        function (err, res) {
            if (err) throw err
            console.table(res)
            prompt()
        })
}

function allRoles() {
    db.query(`SELECT * FROM roles`,
        function (err, res) {
            if (err) throw err
            console.table(res)
            prompt()
        })
}

function allEmployees() {
    db.query(`SELECT * FROM employee`,
        function (err, res) {
            if (err) throw err
            console.table(res)
            prompt()
        })
}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'departmentName',
                message: 'What is the name of the department?'
            }
        ]).then(data => {
            db.query(
                `INSERT INTO department SET ?`, {
                department_name: data.departmentName
            }
            )
            console.log(`Added ${data.departmentName} to the database`);
            prompt()
        })
}

function addRole() {

}

function addEmployee() {

}

function updateEmployee() {

};