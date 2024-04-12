#! /usr/bin/env node
import inquirer from "inquirer";
let answer = 4;
const result = await inquirer.prompt([
    {
        message: "Enter any number between 0-10",
        type: "number",
        name: "number",
    }
]);
const userGuess = result.number;
if (answer === userGuess) {
    console.log("you guess the right answer");
}
else if (answer > userGuess) {
    console.log("you give the wrong number");
}
else {
    console.log("try again");
}
