#! /usr/bin/env node

import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";
import chalkAnimation from "chalk-animation";
import Choices from "inquirer/lib/objects/choices.js";

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

async function welcome() {
  let rainbowTitle = chalkAnimation.rainbow("Let's Strat Calculation");
  await sleep();
  rainbowTitle.stop();
  let rainbowCalculator = chalkAnimation.rainbow(`\t\t 
    _____________________
   |  _________________  |
   | |              00 | |
   | |_________________| |
   |  ___ ___ ___   ___  |
   | | 7 | 8 | 9 | | + | |
   | |___|___|___| |___| |
   | | 4 | 5 | 6 | | - | |
   | |___|___|___| |___| |
   | | 1 | 2 | 3 | | x | |
   | |___|___|___| |___| |
   | | . | 0 | = | | / | |
   | |___|___|___| |___| |
   |_____________________|`)
  await sleep();
   rainbowCalculator.stop();
}
await welcome();

async function askQuestion() {
  const answers = await inquirer.prompt([
    /* Pass your questions in here */
    {
      type: "list",
      name: "operator",
      message: "Which Operation You Want To Perform?\n",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
    {
      type: "number",
      name: "num1",
      message: "Enter Number 1:",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter Number 2:",
    },
  ]);

  if (answers.operator == "Addition") {
    console.log(
      chalk.bgRedBright(
        `${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`
      )
    );
  } else if (answers.operator == "Multiplication") {
    console.log(
      chalk.bgRedBright(
        `${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`
      )
    );
  } else if (answers.operator == "Subtraction") {
    console.log(
      chalk.bgRedBright(
        `${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`
      )
    );
  } else if (answers.operator == "Division") {
    console.log(
      chalk.bgRedBright(
        `${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`
      )
    );
  }
}
// askQuestion();

async function startAgain() {
  do {
    await askQuestion();
    var again = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to continue? Press y or n:",
    });
  } while (
    again.restart == "y" ||
    again.restart == "YES" ||
    again.restart == "Y" ||
    again.restart == "yes"
  );
}
startAgain();
