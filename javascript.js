const result = ["Rock", "Paper", "Sciccors"]

function getComputerChoice(){
    let choice = Math.floor(Math.random() * (result.length));
    return choice
}
getComputerChoice();



function playRound(playerSelection, computerSelection){
if (playerSelection == computerSelection){
    return "It's a tie!
}
else if (playerSelection == "Rock" && computerSelection == "Scissors"){
  return "Player wins!"
} else if (playerSelection == "Paper" && computerSelection == "Rock"){
  return "Player wins!"
} else if (playerSelection == "Scissors" && computerSelection == "Paper"){
  return "Player wins!"
} else if (playerSelection == "Scissors" && computerSelection == "Rock"){
  return "Computer wins!"
  } else if (playerSelection == "Rock" && computerSelection == "Paper"){
  return "Computer wins!"
   } else (playerSelection == "Paper" && computerSelection == "Scissors"){
  return "Computer wins!"}
}

  const playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection))
