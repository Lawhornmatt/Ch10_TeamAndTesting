// ====================
//   PROMPTS
// ====================

// ENTER MANAGER
let teamName = [
  {
    type: 'input',
    name: `teamName`,
    message: `Type in the team name:`,
  },
];

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

module.exports = {
    teamName,
    managerPrompt,
    chooseOquit,
    newEngi,
    newIntern
};