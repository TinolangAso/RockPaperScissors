#!/usr/bin/env node

function main()
{
        let ComputerChoice = ["rock", "paper", "scissor"];

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

                let humanScore = 0;
                let computerScore = 0;
        function playRound(humanChoice, computerChoice)
        {
                
                if (humanChoice === computerChoice)
                {
                        humanScore++;
                        console.log(`It's a tie!\n`);
                }


                else if (
                        (humanChoice === "rock" && computerChoice == "scissor")||
                        (humanChoice === "paper" && computerChoice == "rock")||
                        (humanChoice === "scissor" && computerChoice == "paper")||
                    )
                {
                        humanScore++;
                        console.log(`You win! ${humanChoice} beats ${computerChoice}\n`);
                }

                else
                {
                        computerScore++;
                        console.log(`You lose! ${humanChoice} loses against ${computerChoice}\n`);
                }



                

/*
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
                */

        }

        console.log(`Human choice: ${HumanChoice}`);
}

main();
