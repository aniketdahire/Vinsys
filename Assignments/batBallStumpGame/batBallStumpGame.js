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
  const choices = ["Ball", "Bat", "Stump"];

  const choiceMsg = `You: ${choices[humanValue]}, Computer: ${choices[computerValue]}`;
  let resultClass = "";

  if (humanValue === computerValue) {
    tieCount++;
    resultText = "It's a tie!";
    resultClass = "tie";
  } else if (
    (humanValue === 0 && computerValue === 2) ||
    (humanValue === 1 && computerValue === 0) ||
    (humanValue === 2 && computerValue === 1)
  ) {
    winCount++;
    resultText = "You win!";

    resultClass = "win";
  } else {
    loseCount++;
    resultText = "You lose!";
    resultClass = "lose";
  }

  // Update DOM
  const choiceMessage = document.getElementById("choiceMessage");
  const resultMessage = document.getElementById("resultMessage");
  const winAnimation = document.getElementById("winAnimation");

  choiceMessage.innerText = choiceMsg;
  resultMessage.innerText = resultText;

  resultMessage.className = "";
  resultMessage.classList.add(resultClass);

  // Show/hide GIF for win
  if (resultClass === "win") {
    winAnimation.src = "/Assignments/batBallStumpGame/Assets/winingimage.gif"; // Path to your gif
    winAnimation.style.display = "block"; // Show GIF
  } else {
    winAnimation.style.display = "none"; // Hide GIF for lose/tie
    winAnimation.src = "";
  }

  document.getElementById(
    "winresult"
  ).value = `Wins: ${winCount}, Losses: ${loseCount}, Ties: ${tieCount}`;
}

function re() {
  winCount = 0;
  loseCount = 0;
  tieCount = 0;

  document.getElementById("choiceMessage").innerText = "";
  const resultMsg = document.getElementById("resultMessage");
  resultMsg.innerText = "";
  resultMsg.className = "";

  const winAnimation = document.getElementById("winAnimation");
  winAnimation.style.display = "none"; // Hide GIF
  winAnimation.src = ""; // Reset GIF source

  document.getElementById("winresult").value = "";
}
