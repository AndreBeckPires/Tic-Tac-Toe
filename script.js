var marks = [];
var squares = [];
var player = 0;
var marked = [3, 3, 3, 3, 3, 3, 3, 3, 3];
var gg = document.getElementById("endgame");

for (var i = 0; i < 9; i++) {
  marks[i] = document.getElementsByClassName("mark")[i];
}

for (var i = 0; i < 9; i++) {
  squares[i] = document.getElementsByClassName("square")[i];
}

squares[0].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[0].innerHTML = "x";
    marks[0].style.color = "red";
    marked[0] = 1;
  } else {
    marks[0].innerHTML = "o";
    marks[0].style.color = "blue";
    marked[0] = 2;
  }
  marks[0].style.visibility = "visible";
  player++;
  checkWinner();
});

squares[1].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[1].innerHTML = "x";
    marks[1].style.color = "red";
    marked[1] = 1;
  } else {
    marks[1].innerHTML = "o";
    marks[1].style.color = "blue";
    marked[1] = 2;
  }
  marks[1].style.visibility = "visible";
  player++;
  checkWinner();
});

squares[2].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[2].innerHTML = "x";
    marks[2].style.color = "red";
    marked[2] = 1;
  } else {
    marks[2].innerHTML = "o";
    marks[2].style.color = "blue";
    marked[2] = 2;
  }
  marks[2].style.visibility = "visible";
  player++;
  checkWinner();
});

squares[3].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[3].innerHTML = "x";
    marks[3].style.color = "red";
    marked[3] = 1;
  } else {
    marks[3].innerHTML = "o";
    marks[3].style.color = "blue";
    marked[3] = 2;
  }
  marks[3].style.visibility = "visible";
  player++;
  checkWinner();
});

squares[4].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[4].innerHTML = "x";
    marks[4].style.color = "red";
    marked[4] = 1;
  } else {
    marks[4].innerHTML = "o";
    marks[4].style.color = "blue";
    marked[4] = 2;
  }
  marks[4].style.visibility = "visible";
  player++;
  checkWinner();
});

squares[5].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[5].innerHTML = "x";
    marks[5].style.color = "red";
    marked[5] = 1;
  } else {
    marks[5].innerHTML = "o";
    marks[5].style.color = "blue";
    marked[5] = 2;
  }
  marks[5].style.visibility = "visible";
  player++;
  checkWinner();
});

squares[6].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[6].innerHTML = "x";
    marks[6].style.color = "red";
    marked[6] = 1;
  } else {
    marks[6].innerHTML = "o";
    marks[6].style.color = "blue";
    marked[6] = 2;
  }
  marks[6].style.visibility = "visible";
  player++;
  checkWinner();
});

squares[7].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[7].innerHTML = "x";
    marks[7].style.color = "red";
    marked[7] = 1;
  } else {
    marks[7].innerHTML = "o";
    marks[7].style.color = "blue";
    marked[7] = 2;
  }
  marks[7].style.visibility = "visible";
  player++;
  checkWinner();
});

squares[8].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[8].innerHTML = "x";
    marks[8].style.color = "red";
    marked[8] = 1;
  } else {
    marks[8].innerHTML = "o";
    marks[8].style.color = "blue";
    marked[8] = 2;
  }
  marks[8].style.visibility = "visible";
  player++;
  checkWinner();
});

function checkWinner() {
  if (marked[0] != 3 && marked[0] == marked[1] && marked[0] == marked[2]) {
    if (marked[0] == 1) {
      gg.style.color = "red";
    }
    gg.style.visibility = "visible";
  }
  if (marked[0] != 3 && marked[0] == marked[3] && marked[0] == marked[6]) {
    gg.style.visibility = "visible";
    if (marked[0] == 1) {
      gg.style.color = "red";
    }
  }
  if (marked[0] != 3 && marked[0] == marked[4] && marked[0] == marked[8]) {
    gg.style.visibility = "visible";
    if (marked[0] == 1) {
      gg.style.color = "red";
    }
  }
  if (marked[1] != 3 && marked[1] == marked[4] && marked[1] == marked[7]) {
    gg.style.visibility = "visible";
    if (marked[1] == 1) {
      gg.style.color = "red";
    }
  }
  if (marked[2] != 3 && marked[2] == marked[4] && marked[2] == marked[6]) {
    gg.style.visibility = "visible";
    if (marked[2] == 1) {
      gg.style.color = "red";
    }
  }
  if (marked[2] != 3 && marked[2] == marked[5] && marked[2] == marked[8]) {
    gg.style.visibility = "visible";
    if (marked[2] == 1) {
      gg.style.color = "red";
    }
  }
  if (marked[3] != 3 && marked[3] == marked[4] && marked[3] == marked[5]) {
    gg.style.visibility = "visible";
    if (marked[3] == 1) {
      gg.style.color = "red";
    }
  }
  if (marked[6] != 3 && marked[6] == marked[7] && marked[6] == marked[8]) {
    gg.style.visibility = "visible";
    if (marked[6] == 1) {
      gg.style.color = "red";
    }
  }
}
