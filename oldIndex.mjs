// ====================
//      IMPORTS
// ====================
import inquirer from 'inquirer';
import { MainMenu, DeptMenu, EmpMenu, RoleMenu } from './libs/menus.cjs';

// Following 2 lines allow a .mjs file to use Node's require(), instead of ES6's import
import { createRequire } from 'module';
import { off } from 'process';
const require = createRequire(import.meta.url);

// ====================
//   OBJECTS
// ====================

class Employee {

  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  };
  
  getId() {
    return console.log(`Id: ${this.id}`)
  };

  getName() {
    return console.log(`Name: ${this.name}`)
  };

  getEmail() {
    return console.log(`Email: ${this.email}`)
  };

  getRole() {
    return console.log(`Role: Employee`)
  };
};

class Manager extends Employee {

  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  };

  getRole() {
    return console.log(`Role: Manager`)
  }
};

// ====================
//   BLUEPRINTS
// ====================


// INPUT NEW NAME
// Blueprint function that builds a Inquirer prompt for typing in the new entity name
function typeUpdatedEntity(entity) {
  if (entity == 'employee') {
    let NewName = [
      {
          type: 'input',
          name: `newFirstName`,
          message: `Type in the updated ${entity} first name.`,
      },
      {
          type: 'input',
          name: `newLastName`,
          message: `Type in the updated ${entity} last name.`,
      },
    ];
    return inquirer.prompt(NewName).then((answer) => Object.values(answer) );
  } else if (entity == 'employee role') {
    let NewName = [
      {
          type: 'input',
          name: `newEmpRole`,
          message: `Type in the index of the ${entity} to update to.
          Only a single number character will be accepted.`,
      },
    ]
    return inquirer.prompt(NewName).then((answer) => Object.values(answer)[0] );
  } else {
    let NewName = [
      {
          type: 'input',
          name: `newEntityName`,
          message: `Type in the updated ${entity} name.`,
      },
    ]
    return inquirer.prompt(NewName).then((answer) => Object.values(answer)[0] );
  }
}

// ====================
//    MAIN FUNCTIONS
// ====================

// LOGO SPLASH
console.log(`
\x1b[36m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\x1b[0m
\x1b[0;106m BUILD-A-TEAM \x1b[0m
\x1b[36m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\x1b[0m`);

// -- START UP: MAIN MENU --
// Main body function that takes you to the Main Menu of the app
function startup() {
    inquirer.prompt(MainMenu)
    .then((answers) => {

        // Convert user input into plain string
        let theAnswer = (Object.values(answers))[0];

        // If user choses Quit, app is terminated
        if (theAnswer === 'Quit') { 
          return console.log('Good bye');
        };
        
        // Takes user to the Department Menu
        if (theAnswer === 'Departments') {
          gotoDeptMenu();
        };
        
        // Takes user to the Employee Menu
        if (theAnswer === 'Employees') {
          gotoEmpMenu();
        };

        // Takes user to the Roles Menu
        if (theAnswer === 'Roles') {
          gotoRoleMenu();
        };
    })
    .catch((error) => {
        if (error.isTtyError) {
          console.log("ERROR1: Prompt couldn't be rendered in the current environment");
        } else {
          console.log("ERROR2: Something else went wrong in startup()");
        }
    });
};

// -- DEPARTMENT MENU --
// =====================
function gotoDeptMenu() {
  inquirer.prompt(DeptMenu)
  .then(async(answers) => {
    let theAnswer = (Object.values(answers))[0];

    if (theAnswer === '~Return to Main Menu~') { startup() };

    // --- DELETE DEPARTMENT
    if (theAnswer === 'Delete') { 

      gotoDeptMenu();
    };
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("ERROR DEPT1: Prompt couldn't be rendered in the current environment");
    } else {
      console.log("ERROR DEPT2: Something else went wrong in Dept Menu");
    }
  });
};

startup();