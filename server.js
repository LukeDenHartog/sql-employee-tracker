let inquirer = require('inquirer');
const mysql = require('mysql2');
const { table } = require('table');

const db = mysql.createConnection(
    {
        host: 'localhost',

        user: 'root',

        password: '1234',
        database: 'employee_tracker'
    },
    console.log(`Connected to the employee_tracker database.`)
);

displayPrompt();  // Starts the terminal prompt.

function displayPrompt() {
inquirer
    .prompt([
        {
        type: 'list',
        name: 'index',
        message: 'What would you like to do?',
        choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }
    ]).then((answers) => {
    /*---------------- If user selected 'View All Employees' the code below will run.----------------*/
        if (answers.index === 'View All Employees') {
          db.query("SELECT * FROM employee", function(err, res) {
            if (err) throw err;
            
            // Remove the index column from the results
            const tableData = res.map(({ index, ...rest }) => Object.values(rest));
        
            // Create a new table array
            const data = [];
            
            // Add headers to the table
            const headers = Object.keys(res[0]).filter(key => key !== 'index');
            data.push(headers);
            
            // Add rows to the table
            tableData.forEach(row => data.push(row));
            
            // Display the table
            const output = table(data);
            console.log(output);
            displayPrompt();
          });
        }
            
/*---------------- If user selected 'Update Employee Role' the code below will run.----------------*/
    if (answers.index === 'Update Employee Role') {
        // create a statement to update employee role.
    } else if (answers.index === 'View All Roles') {
        // create a statement to view all roles.
    } else if (answers.index === 'Add Role') {
        inquirer.prompt([
            {
            type: 'input',
            name: 'roleNameInput',
            message: 'What is the name of the role?'
            }
        ]).then((answer) => {
            // create a statement to add a department.
            answer.roleNameInput
        });
        // create a statement to add a role.
    } 

    /*---------------- If user selected 'Update Employee Role' the code below will run. ----------------*/
    else if (answers.index === 'View All Departments') {
        db.query(`SELECT * FROM departments;`, (err, res) => {
         console.table(res);
         displayPrompt();  // Starts the terminal prompt.
        });
        

          /*---------------- If user selected 'Add Department' the code below will run. ----------------*/
    } else if (answers.index === 'Add Department') {
        inquirer.prompt([
        {
        type: 'input',
        name: 'depNameInput',
        message: 'What is the name of the department?'
        }
    ]).then((answers) => {
        
        db.query(`INSERT INTO departments (name) VALUES ("${answers.depNameInput}")`, (err, res) => {
            if (err) throw err;
            console.log('Added new department successfully');
            displayPrompt();  // Starts the terminal prompt.
        })
    });

    } else if (answers.index === 'Quit') {
        console.log('Please run "node index.js to start over');
        // create a statement to quit the command line questions.
    }
    });

}