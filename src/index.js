const gamebox = document.getElementById("gamebox");
const reset = document.getElementById("reset");
const gameStatus = document.getElementById("caption");
const p1name = document.getElementById("p1name");
const p1score = document.getElementById("p1score");
const p2name = document.getElementById("p2name");
const p2score = document.getElementById("p2score");

const row = ["", "", "", "", "", "", "", "", ""];
const players = [
  { name: p1name.value, mark: "X", score: 0 },
  { name: p2name.value, mark: "O", score: 0 },
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
    switchPlayer();
    gameStatus.innerText = `${currentPlayer.name} won`;
    currentPlayer.score = currentPlayer.score + 1;

    gameOver = true;
    console.log(currentPlayer.name + " won" + currentPlayer.score);
  } else if (row[3] === row[4] && row[4] === row[5] && row[3] !== "") {
    switchPlayer();
    currentPlayer.score = currentPlayer.score + 1;
    console.log(currentPlayer.name + " won");
    gameStatus.innerText = `${currentPlayer.name} won`;
    gameOver = true;
  } else if (row[6] === row[7] && row[7] === row[8] && row[6] !== "") {
    switchPlayer();
    currentPlayer.score = currentPlayer.score + 1;
    console.log(currentPlayer.name + " won");
    gameStatus.innerText = `${currentPlayer.name} won`;
    gameOver = true;
  } else if (row[0] === row[3] && row[3] === row[6] && row[0] !== "") {
    switchPlayer();
    currentPlayer.score = currentPlayer.score + 1;
    console.log(currentPlayer.name + " won");
    gameStatus.innerText = `${currentPlayer.name} won`;
    gameOver = true;
  } else if (row[1] === row[4] && row[4] === row[7] && row[1] !== "") {
    switchPlayer();
    currentPlayer.score = currentPlayer.score + 1;
    gameStatus.innerText = `${currentPlayer.name} won`;
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[2] === row[5] && row[5] === row[8] && row[2] !== "") {
    switchPlayer();
    currentPlayer.score = currentPlayer.score + 1;
    gameStatus.innerText = `${currentPlayer.name} won`;
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[0] === row[4] && row[4] === row[8] && row[0] !== "") {
    switchPlayer();
    currentPlayer.score = currentPlayer.score + 1;
    gameStatus.innerText = `${currentPlayer.name} won`;
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row[2] === row[4] && row[4] === row[6] && row[2] !== "") {
    switchPlayer();
    currentPlayer.score = currentPlayer.score + 1;

    gameStatus.innerText = `${currentPlayer.name} won`;
    console.log(currentPlayer.name + " won");
    gameOver = true;
  } else if (row.includes("") == false) {
    gameStatus.innerText = `It's a Draw`;
    console.log("Draw");
    gameOver = true;
  }
  console.log(players[0].score);
  console.log(players[1].score);
  p1score.innerText = players[0].score;
  p2score.innerText = players[1].score;
}

playerMove();
