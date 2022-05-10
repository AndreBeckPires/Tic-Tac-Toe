var xs = [];
var os = [];
var squares = [];
var player = 0;
for (var i = 0; i < 9; i++) {
  xs[i] = document.getElementsByClassName("x")[i];
}
for (var i = 0; i < 9; i++) {
  os[i] = document.getElementsByClassName("o")[i];
}

for (var i = 0; i < 9; i++) {
  squares[i] = document.getElementsByClassName("square")[i];
}

squares[0].addEventListener("click", () => {
  if (player % 2 == 0) {
    xs[0].style.visibility = "visible";
  } else {
    os[0].style.visibility = "visible";
  }
  player++;
});

squares[1].addEventListener("click", () => {
  if (player % 2 == 0) {
    xs[1].style.visibility = "visible";
  } else {
    os[1].style.visibility = "visible";
  }
  player++;
});

squares[2].addEventListener("click", () => {
  if (player % 2 == 0) {
    xs[2].style.visibility = "visible";
  } else {
    os[2].style.visibility = "visible";
  }
  player++;
});

squares[3].addEventListener("click", () => {
  if (player % 2 == 0) {
    xs[3].style.visibility = "visible";
  } else {
    os[3].style.visibility = "visible";
  }
  player++;
});

squares[4].addEventListener("click", () => {
  if (player % 2 == 0) {
    xs[4].style.visibility = "visible";
  } else {
    os[4].style.visibility = "visible";
  }
  player++;
});

squares[5].addEventListener("click", () => {
  if (player % 2 == 0) {
    xs[5].style.visibility = "visible";
  } else {
    os[5].style.visibility = "visible";
  }
  player++;
});

squares[6].addEventListener("click", () => {
  if (player % 2 == 0) {
    xs[6].style.visibility = "visible";
  } else {
    os[6].style.visibility = "visible";
  }
  player++;
});

squares[7].addEventListener("click", () => {
  if (player % 2 == 0) {
    xs[7].style.visibility = "visible";
  } else {
    os[7].style.visibility = "visible";
  }
  player++;
});

squares[8].addEventListener("click", () => {
  if (player % 2 == 0) {
    xs[8].style.visibility = "visible";
  } else {
    os[8].style.visibility = "visible";
  }
  player++;
});

squares[9].addEventListener("click", () => {
  if (player % 2 == 0) {
    xs[9].style.visibility = "visible";
  } else {
    os[9].style.visibility = "visible";
  }
  player++;
});
