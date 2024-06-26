const choices = ["rock", "paper", "scissor"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
let playerScore = 0;
let computerScore = 0;
let result = "";


function playgame(playerchoice) {
  if (!choices.includes(playerchoice)) {
    alert("Invalid choice! Please choose rock, paper, or scissor.");
    return;
  }

  const computerchoice = choices[Math.floor(Math.random() * 3)];
 

  if (playerchoice === computerchoice) {
    result = "TIE!";
  } else if (playerchoice === "rock") {
    if (computerchoice === "paper") {
      result = "YOU LOSE!";
      computerScore++;
    } else {
      result = "YOU WIN!";
      playerScore++;
    }
  } else if (playerchoice === "paper") {
    if (computerchoice === "scissor") {
      result = "YOU LOSE!";
      computerScore++;
    } else {
      result = "YOU WIN!";
      playerScore++;
    }
  } else if (playerchoice === "scissor") {
    if (computerchoice === "rock") {
      result = "YOU LOSE!";
      computerScore++;
    } else {
      result = "YOU WIN!";
      playerScore++;
    }
}

  playerdisplay.textContent = `Player: ${playerchoice}`;
  computerdisplay.textContent = `Computer: ${computerchoice}`;
  resultdisplay.textContent = result;
  document.getElementById("playerscore").textContent = `Player score: ${playerScore}`;
  document.getElementById("computerscore").textContent = `Computer score: ${computerScore}`;

  switch(result){
    case "YOU WIN!":
        document.getElementById("playerscore").style.color = "green";
        document.getElementById("computerscore").style.color = "red";
        document.getElementById("resultdisplay").style.color = "green";

        // resultdisplay.classList.add("greentext");
        break;
    case "YOU LOSE!":
        document.getElementById("playerscore").style.color = "red";
        document.getElementById("computerscore").style.color = "green";
        // resultdisplay.classList.add("redtext");
        document.getElementById("resultdisplay").style.color = "red";

        break;
    case "TIE!":
            document.getElementById("playerscore").style.color = "black";
            document.getElementById("computerscore").style.color = "black";
            break;


  }

}