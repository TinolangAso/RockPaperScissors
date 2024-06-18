#!/usr/bin/env node

function main()
{
        let ComputerChoice = ["Rock", "Paper", "Scissors"];

        function getComputerChoice()
        {
                return Math.floor(Math.random() * 3);
        }

        let n = getComputerChoice(); //To index the ComputerChoice

        console.log(`Computer choice: ${ComputerChoice[n]}\n`);
}

main();
