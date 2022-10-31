// ====================
//      IMPORTS
// ====================

import fs from 'fs';
import inquirer from 'inquirer';

import genHTML from './libs/genHTML.cjs';
import { genManager, genEngineer, genIntern } from './libs/genCards.cjs';
import { Manager, Engineer, Intern } from './libs/objects.cjs';
import { teamName, managerPrompt, chooseOquit, newEngi, newIntern } from './libs/inqPrompts.cjs';

// ====================
//    GATHER USER INPUT
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
  
  // Ask user for a team name. This will also serve as the unique file name of the HTML file
  const teamInfo = await inquirer.prompt(teamName)
  .then((answer) => Object.values(answer)[0]);
  
  // Start making a string of cards, starting with adding the manager info first
  var stringOfAllCards = await inquirer.prompt(managerPrompt)
  .then((answer) => new Manager(answer.managerID, answer.managerNAME, answer.managerEMAIL, answer.managerOFFICE))
  .then((answer) => genManager(answer));

  console.log(`Now lets get the information of the team members.`);

  // User is prompted for engineer details, those are turned into a HTML card, and the chooseAnother prompt is given again
  async function engiFunc() {
    await inquirer.prompt(newEngi)
    .then((answer) => new Engineer(answer.engiID, answer.engiNAME, answer.engiEMAIL, answer.engiGITHUB))
    .then((answer) => genEngineer(answer))
    .then((answer) => stringOfAllCards = stringOfAllCards.concat('\n', answer))
    .then((answer) => chooseAnother());
  };

  // User is prompted for intern details, those are turned into a HTML card, and the chooseAnother prompt is given again
  async function internFunc() {
    await inquirer.prompt(newIntern)
    .then((answer) => new Intern(answer.internID, answer.internNAME, answer.internEMAIL, answer.internSCHOOL))
    .then((answer) => genIntern(answer))
    .then((answer) => stringOfAllCards = stringOfAllCards.concat('\n', answer))
    .then((answer) => chooseAnother());
  };
  
  // User can choose from either adding another engineer, another intern, or stopping the app
  // If QUIT is chosen, all the data is sent to saveHTML() to be daved to disk in HTML format
  async function chooseAnother() {
    await inquirer.prompt(chooseOquit)
    .then((answer) => {
      if (answer.userChoice == 'Add Engineer') {
        engiFunc();
      } else if (answer.userChoice == 'Add Intern') {
        internFunc();
      } else {
        return saveHTML(teamInfo, stringOfAllCards);
      }
    });
  };

  await chooseAnother();
};

// -- SAVE THE HTML --
// Takes in all user inputs and saves HTML file in /dist
function saveHTML(teamName, cardString) {

  // First lets get the whole HTML string
  const completeHTMLString = genHTML(teamName, cardString);

  fs.writeFile(`./dist/${teamName}-index.html`, completeHTMLString, (err) => err ? console.error(err) : console.log(`\x1b[36m~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\x1b[0m`));
};


// Start the app
startup();
