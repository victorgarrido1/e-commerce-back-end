const router = require('express').Router();
const inquirer = require('inquirer'); // Changed from destructuring import
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

// Function that uses Inquirer to prompt the user for the command line
function promptUser() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choices',
      message: 'What would you like to do?',
      choices: [
        'View all Employees',
        'Add Employee',
        'Update Employee',
        'View All Roles',
        'Add Role',
        'View All Departments',
        'Add Department'
      ]
    }
  ]).then(answers => {
    const { choices } = answers;

    if (choices === 'View All Employees') {
      showEmployees();
    }
    if (choices === 'Add Employee') {
      addEmployee();
    }
    if (choices === 'View All Roles') {
      showARoles();
    }
    if (choices === 'Add Role') {
      addRole();
    }
    if (choices === 'View All Departments') {
      viewADepartments();
    }
    if (choices === 'Add Department') {
      addDepartment();
    }

    // Process user's answers here
    console.log(answers);
  });
}

module.exports = router;
