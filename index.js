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