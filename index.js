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
        ]).then((data) => {
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
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'roleName',
                message: 'What is the name of the role?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role?'
            },
            {
                type: 'input',
                name: 'roleDepartment',
                message: 'Which department does the role belong to?'
            },
        ]).then((data) => {
            db.query(
                `INSERT INTO roles SET ?`, {
                title: data.roleName,
                salary: data.salary,
                department_id: data.roleDepartment
            }
            )
            console.log(`Added ${data.roleName} to the database`);
            prompt()
        })
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'firstName',
                message: "What is the employee's first name?"
            },
            {
                type: 'input',
                name: 'lastName',
                message: "What is the employee's last name?"
            },
            {
                type: 'input',
                name: 'employeeRole',
                message: "What is the employee's role id?"
            },
            {
                type: 'input',
                name: 'manager',
                message: "What is the employee's manager id?"
            },
        ]).then((data) => {
            db.query(
                `INSERT INTO employee SET ?`, {
                first_name: data.firstName,
                last_name: data.lastName,
                role_id: data.employeeRole,
                manager_id: data.manager
            }
            )
            console.log(`Added ${data.firstName} ${data.lastName} to the database`);
            prompt()
        })
}

function updateEmployee() {

};