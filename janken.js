console.log('Hello player! Let\'s play Janken');


const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Error!');
  }
}

function getComputerChoice (){
  let choiceNum = Math.floor(Math.random()*3)
  switch (choiceNum) {
  case 0:
  return 'rock';
  break;
  case 1:
  return 'paper';
  break;
  case 2:
  return 'scissors';
  break;
  default:
  return console.log('Error!');
  break;
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'You cheater, you won!';
  } 
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
  }
  if (userChoice === 'paper') {
   if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else if (computerChoice === 'rock') {
    return 'You won!';
  }
  }
  if (userChoice === 'scissors') {
   if (computerChoice === 'rock') {
    return 'The computer won!';
  } else if (computerChoice === 'paper') {
    return 'You won!';
  }
  } 
  }
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('Saisho wa guu janken pon!')
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
