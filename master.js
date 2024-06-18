#!/usr/bin/env node

function main()
{
        let computerChoices = ["rock", "paper", "scissor"];

        function getComputerChoice()
        {
                let randomIndex = Math.floor(Math.random() * 3);
                return computerChoices[randomIndex];
        }

        let computerChoice = getComputerChoice();
        console.log(`computer choice: ${computerChoice}\n`);


        let humanChoice;

        function getHumanChoice()
        {
                let choice = prompt("What's your pick? ");
                return choice.trim().toLowerCase();
        }

        humanChoice = getHumanChoice();
        console.log(`human choice: ${humanChoice}\n`);

        let humanScore = 0;
        let computerScore = 0;

        function playRound(humanChoice, computerChoice)
        {
                
                if (humanChoice === computerChoice)
                {
                        console.log(`It's a tie!\n`);
                }


                else if (
                        (humanChoice === "rock" && computerChoice === "scissor")||
                        (humanChoice === "paper" && computerChoice === "rock")||
                        (humanChoice === "scissor" && computerChoice === "paper")
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

        }

        playRound(humanChoice, computerChoice);
}

main();
