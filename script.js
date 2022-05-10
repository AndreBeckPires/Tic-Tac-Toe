var xs = [];
var os = [];
var squares = [];

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
  xs[0].style.visibility = "visible";
  os[0].style.visibility = "visible";
});

squares[1].addEventListener("click", () => {
  xs[1].style.visibility = "visible";
  os[1].style.visibility = "visible";
});

squares[2].addEventListener("click", () => {
  xs[2].style.visibility = "visible";
  os[2].style.visibility = "visible";
});

squares[3].addEventListener("click", () => {
  xs[3].style.visibility = "visible";
  os[3].style.visibility = "visible";
});

squares[4].addEventListener("click", () => {
  xs[4].style.visibility = "visible";
  os[4].style.visibility = "visible";
});

squares[4].addEventListener("click", () => {
  xs[4].style.visibility = "visible";
  os[4].style.visibility = "visible";
});

squares[5].addEventListener("click", () => {
  xs[5].style.visibility = "visible";
  os[5].style.visibility = "visible";
});

squares[6].addEventListener("click", () => {
  xs[6].style.visibility = "visible";
  os[6].style.visibility = "visible";
});

squares[7].addEventListener("click", () => {
  xs[7].style.visibility = "visible";
  os[7].style.visibility = "visible";
});

squares[8].addEventListener("click", () => {
  xs[8].style.visibility = "visible";
  os[8].style.visibility = "visible";
});

squares[9].addEventListener("click", () => {
  xs[9].style.visibility = "visible";
  os[9].style.visibility = "visible";
});
