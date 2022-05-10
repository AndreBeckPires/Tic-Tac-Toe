var marks = [];

var squares = [];
var player = 0;
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
  } else {
    marks[0].innerHTML = "o";
    marks[0].style.color = "blue";
  }
  marks[0].style.visibility = "visible";
  player++;
});

squares[1].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[1].innerHTML = "x";
    marks[1].style.color = "red";
  } else {
    marks[1].innerHTML = "o";
    marks[1].style.color = "blue";
  }
  marks[1].style.visibility = "visible";
  player++;
});

squares[2].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[2].innerHTML = "x";
    marks[2].style.color = "red";
  } else {
    marks[2].innerHTML = "o";
    marks[2].style.color = "blue";
  }
  marks[2].style.visibility = "visible";
  player++;
});

squares[3].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[3].innerHTML = "x";
    marks[3].style.color = "red";
  } else {
    marks[3].innerHTML = "o";
    marks[3].style.color = "blue";
  }
  marks[3].style.visibility = "visible";
  player++;
});

squares[4].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[4].innerHTML = "x";
    marks[4].style.color = "red";
  } else {
    marks[4].innerHTML = "o";
    marks[4].style.color = "blue";
  }
  marks[4].style.visibility = "visible";
  player++;
});

squares[5].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[5].innerHTML = "x";
    marks[5].style.color = "red";
  } else {
    marks[5].innerHTML = "o";
    marks[5].style.color = "blue";
  }
  marks[5].style.visibility = "visible";
  player++;
});

squares[6].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[6].innerHTML = "x";
    marks[6].style.color = "red";
  } else {
    marks[6].innerHTML = "o";
    marks[6].style.color = "blue";
  }
  marks[6].style.visibility = "visible";
  player++;
});

squares[7].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[7].innerHTML = "x";
    marks[7].style.color = "red";
  } else {
    marks[7].innerHTML = "o";
    marks[7].style.color = "blue";
  }
  marks[7].style.visibility = "visible";
  player++;
});

squares[8].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[8].innerHTML = "x";
    marks[8].style.color = "red";
  } else {
    marks[8].innerHTML = "o";
    marks[8].style.color = "blue";
  }
  marks[8].style.visibility = "visible";
  player++;
});

squares[9].addEventListener("click", () => {
  if (player % 2 == 0) {
    marks[9].innerHTML = "x";
    marks[9].style.color = "red";
  } else {
    marks[9].innerHTML = "o";
    marks[9].style.color = "blue";
  }
  marks[9].style.visibility = "visible";
  player++;
});
