const gamebox = document.getElementById("gamebox");

const row1 = ["", "", ""];
const row2 = ["", "", ""];
const row3 = ["", "", ""];

const player = {
  P1_name: "playerone",
  P1_sign: "X",
  P2_name: "playertwo",
  P2_sign: "O",
};

function playerMove() {
  gamebox.children[0].addEventListener("click", () => {
    row1[0] = "X";
    console.log(row1);
    console.log(row2);
    console.log(row3);
  });
  gamebox.children[1].addEventListener("click", () => {
    row1[1] = "X";
    console.log(row1);
    console.log(row2);
    console.log(row3);
  });
  gamebox.children[2].addEventListener("click", () => {
    row1[2] = "X";
    console.log(row1);
    console.log(row2);
    console.log(row3);
  });
  gamebox.children[3].addEventListener("click", () => {
    row2[0] = "X";
    console.log(row1);
    console.log(row2);
    console.log(row3);
  });
  gamebox.children[4].addEventListener("click", () => {
    row2[1] = "X";
    console.log(row1);
    console.log(row2);
    console.log(row3);
  });
  gamebox.children[5].addEventListener("click", () => {
    row2[2] = "X";
    console.log(row1);
    console.log(row2);
    console.log(row3);
  });
  gamebox.children[6].addEventListener("click", () => {
    row3[0] = "X";
    console.log(row1);
    console.log(row2);
    console.log(row3);
  });
  gamebox.children[7].addEventListener("click", () => {
    row3[1] = "X";
    console.log(row1);
    console.log(row2);
    console.log(row3);
  });
  gamebox.children[8].addEventListener("click", () => {
    row3[2] = "X";
    console.log(row1);
    console.log(row2);
    console.log(row3);
  });
}

function winConditions() {
  if (row1.every((val, i, row1) => val === row1[0])) {
  } else if (row2.every((val, i, row2) => val === row2[0])) {
  } else if (row3.every((val, i, row3) => val === row3[0])) {
  } else if ((row1[0] == row2[0]) == row3[0]) {
  } else if ((row1[1] == row2[1]) == row3[1]) {
  } else if ((row1[2] == row2[2]) == row3[2]) {
  } else if ((row1[0] == row2[1]) == row3[2]) {
  } else if ((row1[2] == row2[1]) == row3[0]) {
  }
}
winConditions();
