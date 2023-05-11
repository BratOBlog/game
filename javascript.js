const computerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
};

const validator = () => {
  const userChoice = document.querySelector("#user-input").value.toLowerCase();
  const userInput = ['rock', 'paper', 'scissors'];
  if (!userInput.includes(userChoice)) {
    alert("You must enter a valid choice");
  } else {
    game(userChoice);
  }
};

const game = (userChoice) => {
  const computer = computerChoice();
  let result;
  if(userChoice === computer) {
    console.log(userChoice);
    console.log(computer);
    result = "It's a tie!"
  } else if(userChoice === "rock" && computer === "scissors" || userChoice === "paper" && computer === "rock" || userChoice === "scissors" && computer === "paper") {
    console.log(userChoice);
    console.log(computer);
    result = "User wins!"
  } else {
    console.log(userChoice);
    console.log(computer);
    result = "Computer wins!"
  }
  document.querySelector("#result").innerHTML = result;
};

document.querySelector("#play-button").addEventListener("click", validator);
