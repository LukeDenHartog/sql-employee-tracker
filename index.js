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

    if (answers.index === 'Update Employee Role') {
        // create a statement to update employee role
    } else if (answers.index === 'View All Roles') {
        // create a statement to view all roles
    } else if (answers.index === 'Add Role') {
        inquirer.prompt([
            {
            type: 'input',
            name: 'roleNameInput',
            message: 'What is the name of the role?'
            }
        ]).then((answer) => {
            // create a statement to add a department
            let roleName;
            answer.roleNameInput = roleName;
        });
        // create a statement to add a role
    } else if (answers.index === 'View All Departments') {
        // create a statement to view all departments
    } else if (answers.index === 'Add Department') {
        inquirer.prompt([
        {
        type: 'input',
        name: 'departmentNameInput',
        message: 'What is the name of the department?'
        }
    ]).then((answers) => {
        
        // create a statement to add a department
    });
    } else if (answers.index === 'Quit') {
        console.log('Please run "node index.js to start');
        // create a statement to quit the command line questions
    }
    });