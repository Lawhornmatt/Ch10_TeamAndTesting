// ====================
//      IMPORTS
// ====================
import fs from 'fs';
import inquirer from 'inquirer';
import { MainMenu, DeptMenu, EmpMenu, RoleMenu } from './libs/menus.cjs';

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
//   PROMPTS
// ====================

// ENTER MANAGER
let managerPrompt = [
  {
    type: 'input',
    name: `managerID`,
    message: `Type in manager ID number:`,
  },
  {
      type: 'input',
      name: `managerNAME`,
      message: `Type in the manager's name:`,
  },
  {
      type: 'input',
      name: `managerEMAIL`,
      message: `Type in the manager's email:`,
  },
  {
      type: 'input',
      name: `managerOFFICE`,
      message: `Type in the manager's office number:`,
  },
];

// CHOOSE ENGI OR INTERN
let chooseOquit = [
  {
    type: 'list',
    name: 'userChoice',
    message: 'Add a teammate or quit.',
    choices: ['Add Engineer', 'Add Intern', 'Done with team'],
  },
];

// NEW ENGINEER
let newEngi = [
  {
      type: 'input',
      name: `engiNAME`,
      message: `Type in the engineer's name:`,
  },
  {
      type: 'input',
      name: `engiID`,
      message: `Type in the engineer's ID:`,
  },
  {
      type: 'input',
      name: `engiEMAIL`,
      message: `Type in the engineer's email:`,
  },
  {
      type: 'input',
      name: `engiGITHUB`,
      message: `Type in the engineer's GitHub username:`,
  },
];

// NEW INTERN
let newIntern = [
  {
    type: 'input',
    name: `internNAME`,
    message: `Type in the intern's name:`,
  },
  {
    type: 'input',
    name: `internID`,
    message: `Type in the intern's ID:`,
  },
  {
    type: 'input',
    name: `internEMAIL`,
    message: `Type in the intern's email:`,
  },
  {
    type: 'input',
    name: `internSCHOOL`,
    message: `Type in the intern's school:`,
  },
];



// ====================
//    MAIN FUNCTIONS
// ====================

// LOGO SPLASH
console.log(`
\x1b[36m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\x1b[0m
\x1b[1;33m BUILD-A-TEAM \x1b[0m
\x1b[36m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\x1b[0m`);

// -- START UP: MAIN MENU --
// Main body function that takes you to the Main Menu of the app
async function startup() {
  console.log(`Let us start by the info of the manager of the team.`);
  
  const managerInfo = await inquirer.prompt(managerPrompt);

  const teamArray = [managerInfo];

  console.log(`Now lets get the information of the team members.`);

  async function engiFunc() {
    await inquirer.prompt(newEngi)
    .then((answer) => teamArray.push(answer))
    .then((answer) => chooseAnother());
  };

  async function internFunc() {
    await inquirer.prompt(newIntern)
    .then((answer) => teamArray.push(answer))
    .then((answer) => chooseAnother());
  };
  
  async function chooseAnother() {
    await inquirer.prompt(chooseOquit)
    .then((answer) => {
      if (answer.userChoice == 'Add Engineer') {
        engiFunc();
      } else if (answer.userChoice == 'Add Intern') {
        internFunc();
      } else {
        return console.log(teamArray);
      }
    });
  };

  await chooseAnother();

};
    
startup();