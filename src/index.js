const gamebox = document.getElementById("gamebox");
const row = ["", "", "", "", "", "", "", "", ""];
const players = [
  { name: "playerOne", mark: "X" },
  { name: "playerTwo", mark: "O" },
];
let currentPlayer = players[0];
let gameOver = false;
function switchPlayer() {
  currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
}
function playerMove() {
  for (let i = 0; i <= 8; i++) {
    gamebox.children[i].addEventListener("click", () => {
      if (!gameOver && row[i] == "") {
        row[i] = currentPlayer.mark;
        console.log(row);
        checkWin();
        switchPlayer();
      }
    });
  }
}
function checkWin() {
  if (row[0] === row[1] && row[1] === row[2] && row[0] !== "") {
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[3] === row[4] && row[4] === row[5] && row[3] !== "") {
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[6] === row[7] && row[7] === row[8] && row[6] !== "") {
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[0] === row[3] && row[3] === row[6] && row[0] !== "") {
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[1] === row[4] && row[4] === row[7] && row[1] !== "") {
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[2] === row[5] && row[5] === row[8] && row[2] !== "") {
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[0] === row[4] && row[4] === row[8] && row[0] !== "") {
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[2] === row[4] && row[4] === row[6] && row[2] !== "") {
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row.includes("") == false) {
    console.log("Draw");
    gameOver = true;
  }
}
playerMove();
