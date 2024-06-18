#!/usr/bin/env node

function main()
{
        let ComputerChoice;

        function getComputerChoice()
        {
                return Math.floor(Math.random() * 3);
        }

        ComputerChoice = getComputerChoice();
        console.log(`Computer choice: ${ComputerChoice}\n`);
}

main();
