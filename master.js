#!/usr/bin/env node

function main()
{
        let ComputerChoice = ["rock", "paper", "scissors"];

        function getComputerChoice()
        {
                return Math.floor(Math.random() * 3);
        }

        let n = getComputerChoice(); //To index the ComputerChoice

        console.log(`Computer choice: ${ComputerChoice[n]}\n`);

        let HumanChoice;

        function getHumanChoice()
        {
                return prompt("What's your pick? ");
        }

        HumanChoice = getHumanChoice();

        console.log(`Human choice: ${HumanChoice}`);
}

main();
