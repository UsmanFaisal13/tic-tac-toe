const gamebox = document.getElementById("gamebox");
const reset = document.getElementById("reset");
const gameStatus = document.getElementById("caption");
const row = ["", "", "", "", "", "", "", "", ""];
const players = [
  { name: "PlayerOne", mark: "X" },
  { name: "PlayerTwo", mark: "O" },
];
let currentPlayer = players[0];
let gameOver = false;
function switchPlayer() {
  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
  gameStatus.innerText = `${currentPlayer.name}'s Turn`;
}
function playerMove() {
  for (let i = 0; i <= 8; i++) {
    gamebox.children[i].addEventListener("click", () => {
      if (!gameOver && row[i] == "") {
        row[i] = currentPlayer.mark;
        gamebox.children[i].innerText = `${currentPlayer.mark}`;
        console.log(row);

        switchPlayer();
        checkWin();
        reset.onclick = () => {
          row.fill("");
          for (let j = 0; j <= gamebox.children.length; j++) {
            gamebox.children[j].innerText = ``;
            gameOver = false;
          }
        };
      }
    });
  }
}

function checkWin() {
  if (row[0] === row[1] && row[1] === row[2] && row[0] !== "") {
    console.log(currentPlayer.name + " won");
    switchPlayer();
    gameStatus.innerText = `${currentPlayer.name} won`;
    gameOver = true;
  } else if (row[3] === row[4] && row[4] === row[5] && row[3] !== "") {
    switchPlayer();
    console.log(currentPlayer.name + " won");
    gameStatus.innerText = `${currentPlayer.name} won`;
    gameOver = true;
  } else if (row[6] === row[7] && row[7] === row[8] && row[6] !== "") {
    switchPlayer();
    console.log(currentPlayer.name + " won");
    gameStatus.innerText = `${currentPlayer.name} won`;
    gameOver = true;
  } else if (row[0] === row[3] && row[3] === row[6] && row[0] !== "") {
    switchPlayer();
    console.log(currentPlayer.name + " won");
    gameStatus.innerText = `${currentPlayer.name} won`;
    gameOver = true;
  } else if (row[1] === row[4] && row[4] === row[7] && row[1] !== "") {
    switchPlayer();
    gameStatus.innerText = `${currentPlayer.name} won`;
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[2] === row[5] && row[5] === row[8] && row[2] !== "") {
    switchPlayer();
    gameStatus.innerText = `${currentPlayer.name} won`;
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[0] === row[4] && row[4] === row[8] && row[0] !== "") {
    switchPlayer();
    gameStatus.innerText = `${currentPlayer.name} won`;
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[2] === row[4] && row[4] === row[6] && row[2] !== "") {
    switchPlayer();
    gameStatus.innerText = `${currentPlayer.name} won`;
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row.includes("") == false) {
    gameStatus.innerText = `It's a Draw`;
    console.log("Draw");
    gameOver = true;
  }
}
playerMove();
