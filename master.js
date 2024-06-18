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
                let choice = prompt("What's your pick? ");
                return choice.trim().toLowerCase();
        }

        HumanChoice = getHumanChoice();

        function playRound(humanChoice, computerChoice)
        {
                let humanScore, computerScore;

                /** 
                 * Insert code here
                 * **/

                if (humanScore > computerScore)
                {
                        console.log("You Win!\n");
                }

                else if (humanScore < computerScore);
                {
                        console.log("You lose!\n");
                }

                else
                {
                        console.log("It's a tie!\n");
                }

        }

        console.log(`Human choice: ${HumanChoice}`);
}

main();
