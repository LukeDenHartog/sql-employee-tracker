let inquirer = require('inquirer');

inquirer
    .prompt([
        {
        type: 'list',
        name: 'index',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role, View All Departments', 'Add Department', 'Quit']
        }
    ]).then((answers) => {

    if(answers.index === 'View All Employees') {
       // create a statement to view all employees
    }

        if(answers.index === 'Update Employee Role') {
            // create a statement to update employee role
        }
        if(answers.index === 'View All Roles') {
            // create a statement to view all roles
        }
        if(answers.index === 'Add Role') {
            // create a statement to add a role
        }

        if(answers.index === 'View All Departments') {
            // create a statement to view all departments
        }

        if(answers.index === 'Add Department') {
            // create a statement to add a department.
        }

        if(answers.index === 'Quit') {
            console.log('Please ')
            // create a statement to quit the command line questions
        }
    });