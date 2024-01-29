const gamebox = document.getElementById("gamebox");

const row = ["", "", "", "", "", "", "", "", ""];

const player = [
  { name: "playerOne", mark: "X" },
  { name: "playerTwo", mark: "O" },
];

playerMove();

function playerMove() {
  for (let i = 0; i <= 8; i++) {
    gamebox.children[i].addEventListener("click", () => {
      const X = row.filter((x) => x === player[0].mark).length + 1;
      const O = row.filter((o) => o === player[1].mark).length + 1;
      if (X > O) {
        row[i] = player[1].mark;
        console.log(row);
      } else {
        row[i] = player[0].mark;
        console.log(row);
      }
      console.log(X);
    });
  }
}

// function winConditions() {
//   if (row1.every((val, i, row1) => val === row1[0])) {
//   } else if (row2.every((val, i, row2) => val === row2[0])) {
//   } else if (row3.every((val, i, row3) => val === row3[0])) {
//   } else if ((row1[0] == row2[0]) == row3[0]) {
//   } else if ((row1[1] == row2[1]) == row3[1]) {
//   } else if ((row1[2] == row2[2]) == row3[2]) {
//   } else if ((row1[0] == row2[1]) == row3[2]) {
//   } else if ((row1[2] == row2[1]) == row3[0]) {
//   }
// }
// if (
//   row1.every(
//     (val, i) =>
//       val !== "" ||
//       row2.every((val, i) => val !== "" || row3.every((val, i) => val !== ""))
//   )
// ) {
// } else {
// }
// winConditions();
