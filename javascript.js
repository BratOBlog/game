function getComputerChoice(){
    let result = ["Rock", "Paper", "Sciccors"]
    let computerChoice = Math.floor(Math.random() * (result.length));
    return computerChoice()
        if (result === 0){
            return "Rock";
        } else if (result === 1){
            if (result === 1){
                return "Paper";
            }
        } else (result === 2){
            return "Sciccors";}
};



function playRound(playerSelection, computerSelection) {
    // your code here
if (playerSelection === 0 && computerSelection === 0){
    return `It's a tie!`;
} else if (playerSelection > computerSelection){
    return `Player wins!`;
} else (playerSelection < computerSelection)
    return `Computer wins`;
}


  const playerSelection = "paper";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));