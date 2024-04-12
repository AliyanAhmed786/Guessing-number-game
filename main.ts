#! /usr/bin/env node

// npx esrun main.ts 
// my code run with this command

import inquirer from "inquirer";

let answer: number= 4;

const result= await inquirer.prompt([
    {
        message: "Enter any number between 0-10",
        type: "number",
        name: "number",
    }
]);

const userGuess = result.number;

if (answer===userGuess){
    console.log( "you guess the right answer")
}else if(answer > userGuess) {
    console.log("you give the wrong number");
}else{
    console.log("try again")
}



