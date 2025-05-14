let winCount = 0;
let loseCount = 0;
let tieCount = 0;

function bat() {
  let humanValue = 1;
  console.log("You show bat");
  getresult(humanValue);
}

function ball() {
  let humanValue = 0;
  console.log("You show ball");
  getresult(humanValue);
}

function stump() {
  let humanValue = 2;
  console.log("You show stump");
  getresult(humanValue);
}

function compchoise(computerValue) {
  if (computerValue === 0) {
    console.log("Computer shows ball");
  } else if (computerValue === 1) {
    console.log("Computer shows bat");
  } else {
    console.log("Computer shows stump");
  }
}

function getresult(humanValue) {
  let computerValue = Math.floor(Math.random() * 3);
  compchoise(computerValue);

  let resultText = "";
  if (humanValue === computerValue) {
    tieCount++;
    resultText = "It's a tie!";
  } else if (
    (humanValue === 0 && computerValue === 2) ||
    (humanValue === 1 && computerValue === 0) ||
    (humanValue === 2 && computerValue === 1)
  ) {
    winCount++;
    resultText = "You win!";
  } else {
    loseCount++;
    resultText = "You lose!";
  }

  document.getElementById(
    "message"
  ).innerText = `You: ${humanValue}, Computer: ${computerValue}  ${resultText}`;
  document.getElementById(
    "winresult"
  ).value = `Wins: ${winCount}, Losses: ${loseCount}, Ties: ${tieCount}`;
}

function re() {
  winCount = 0;
  loseCount = 0;
  tieCount = 0;

  document.getElementById("message").innerText = "Result:";
  document.getElementById("winresult").value = "";
}