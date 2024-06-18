#!/usr/bin/env node

function main()
{
        let computerChoices = ["rock", "paper", "scissor"];
        let humanScore = 0;
        let computerScore = 0;




        function playGame()
        {
                        for(let i = 0; i < 5; i++)
                        {
                                function getComputerChoice()
                                {
                                        let randomIndex = Math.floor(Math.random() * 3);
                                        return computerChoices[randomIndex];
                                }

                                let computerChoice = getComputerChoice();


                                let humanChoice;

                                function getHumanChoice()
                                {
                                        let choice = prompt("What's your pick? ");
                                        return choice.trim().toLowerCase();
                                }

                                humanChoice = getHumanChoice();

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
            if(humanScore > computerScore)
                {
                        console.log(`\nYou win! up by ${humanScore - computerScore}\n`);
                }

            else if (computerScore < humanScore)
                {
                        console.log(`\nYou lose! by ${computerScore - humanScore}\n`);
                }

            else
                {
                        console.log("\nCongratulations! It's a tie!\n");
                }

        }

        playGame();
}

main();
