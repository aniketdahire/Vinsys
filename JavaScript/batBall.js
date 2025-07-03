// // let batValue = 0;
// // let ball = 1;
// // let stump = 2;

// // // function getComputerInput() {
// // let computerValue = Math.round(Math.random() * 2);
// // console.log(computerValue);

// // if (humanValue == computerValue){
// //     console.log("It's a tie");
// // } else if (humanValue > computerValue ){
// //     console.log("You win");
// // } else if (humanValue < computerValue){
// //     console.log("You lost");
// // // } else if (humanValue == stump && computerValue == batValue){
// // //     console.log("You win");
// // // } else if (humanValue == ball && computerValue == batValue){
// // //     console.log("You lose");
// // // }   else if (humanValue == stump && computerValue == ball){
// // //     console.log("You lose");
// // // } else if (humanValue == batValue && computerValue == stump){
// // //     console.log("You lose");
// // // }  else {
// // //     console.log("Invalid input");
// // // }
// // }

// // }

// // function ball(){
// //     let humanValue = 0;
// //     console.log("You Show ball");

// //     let computerValue = Math.round(Math.random() *2);
// //     console.log(computerValue);

// //     if (humanValue == computerValue){
// //         console.log("It's a tie");
// //     } else if (humanValue > computerValue ){
// //         console.log("You win");
// //     } else if (humanValue < computerValue){
// //         console.log("You lost");
// //     }

// // }

// // function stump(){
// //     let humanValue = 2;
// //     console.log("You show stump");

// //     let computerValue = Math.round(Math.random() *2);
// //     console.log(computerValue);

// //     if (humanValue == computerValue){
// //         console.log("It's a tie");
// //     } else if (humanValue > computerValue ){
// //         console.log("You win");
// //     } else if (humanValue < computerValue){
// //         console.log("You lost");
// //     }
// // }
let batmsg = "";
let batmsg1 = "";
function bat() {
  let humanValue = 1;
  console.log("You show bat");

   batmsg = document.querySelector("#btn");

   batmsg1 = document.createElement("h5");

  batmsg1.innerText = "You clicked bat";

  batmsg.appendChild(batmsg1);

  getresult(humanValue);
}

function ball() {
  let humanValue = 0;
  console.log("You show ball");

   msg = document.querySelector("#btn");

   msg1 = document.createElement("h5");

  msg1.innerText = "You clicked ball";

  msg.appendChild(msg1);

  getresult(humanValue);
}

function stump() {
  let humanValue = 2;
  console.log("You show stump");
  msg = document.querySelector("#btn");

  msg1 = document.createElement("h5");

  msg1.innerText = "You clicked Stump";

  msg.appendChild(msg1);

  getresult(humanValue);
}

let winCount = 0;
let loseCount = 0;
let tieCount = 0;

function re() {
  winCount = 0;
  loseCount = 0;
  tieCount = 0;

  // document.removeChild('msg')// Clear result message and win summary
  document.getElementById("message").innerText = "Result:";
  document.getElementById("winresult").value = "";
  // document.getElementById("message").innerText = "";
  batmsg1.innerText = ""; // Remove the last message
  // document.querySelector("msg1").innerText = "";
  // Optional: clear/reset the reset button value if you had set it earlier
  document.getElementById("reset").innerText = "reset";
}

function compchoise(computerValue) {
  if (computerValue == 0) {
    console.log("computer show ball");
  } else if (computerValue == 1) {
    console.log("computer show bat ");
  } else if (computerValue == 2) {
    console.log("computer show stump ");
  }
}
function getresult(humanValue) {
  let computerValue = Math.round(Math.random() * 2);
  compchoise(computerValue);

  if (humanValue == computerValue) {
    tieCount++;
    document.getElementById(
      "message"
    ).innerText = `Your value ${humanValue}, computer value ${computerValue} , it's a tie`;
    console.log("It's a tie");
  } else if (humanValue > computerValue) {
    winCount++;
    document.getElementById(
      "message"
    ).innerText = `Your value ${humanValue}, computer value ${computerValue} , you won`;

    console.log("You win");
  } else if (humanValue < computerValue) {
    loseCount++;
    document.getElementById(
      "message"
    ).innerText = `Your value ${humanValue}, computer value ${computerValue} , you lost`;

    console.log("You lost");
  }

  document.getElementById(
    "winresult"
  ).value = `You: ${humanValue}, Computer: ${computerValue}, Win: ${winCount}, Lose: ${loseCount}, Tie: ${tieCount}`;
}

// console.log(stump());
// console.log(ball());
// console.log(bat());
// console.log(re());

// // const getUserChoice = userInput => {
// //   userInput = userInput.toLowerCase();
// //   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
// //     return userInput;
// //   } else {
// //     console.log('Enter valid Input!')
// //   }
// // }

// // // console.log(getUserChoice('rock'));

// // const getComputerChoice = () => {
// //   randomNumber=Math.floor(Math.random() * 3);
// //   switch(randomNumber){
// //     case 0:
// //       return 'rock';
// //       break;
// //     case 1:
// //       return 'paper';
// //       break;
// //     case 2 :
// //     return 'scissors';
// //     break;
// //     default:
// //     return 'wrong input'
// //   }
// // }

// // // console.log(getComputerChoice());

// // const determineWinner = (userChoice, computerChoice) => {

// //   if (userChoice === 'bomb'){
// //     return 'human won';
// //   }

// //    if (userChoice === computerChoice){
// //     return 'game tie!';
// //    }

// //    if (userChoice === 'rock'){
// //     if (computerChoice === 'paper'){
// //       return 'Computer won!'
// //     } else {
// //       return 'Human won!'
// //     }
// //    }

// //    if (userChoice === 'paper'){
// //     if (computerChoice === 'scissors' || computerChoice === 'rock'){
// //       if (computerChoice === 'rock'){
// //         return 'Human won!';
// //         } else {
// //           return 'Computer won!';
// //           }
// //         }
// //       }

// //    if (userChoice === 'scissors'){
// //     if (computerChoice === 'rock' || computerChoice === 'paper'){
// //       if (computerChoice === 'rock'){
// //         return 'computer won!'
// //       } else {
// //         return 'Human won!'
// //       }
// //     }
// //    }

// //     if (userChoice != computerChoice){
// //       return 'userChoice won';
// //     } else {
// //       return 'computerChoice won';
// //     }
// // }

// // const playGame = () => {
// //  const userChoice = getUserChoice('bomb');
// //  const computerChoice = getComputerChoice();

// // console.log('You show ', userChoice);
// // console.log('computer show ', computerChoice);

// // console.log(determineWinner(userChoice,computerChoice));
// // }

// // playGame();
// //  // console.log(determineWinner('paper','scissors'))
