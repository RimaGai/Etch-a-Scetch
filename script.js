const button = document.querySelector(".size-button");
const grid = document.querySelector(".container");
let color = "grey";

//Creates a grid
function createGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const amountOfDivs = size * size;

  for (let i = 0; i < amountOfDivs; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.insertAdjacentElement("beforeend", cell);

    //Adds hover effect that changes color of squares
    cell.addEventListener("mouseenter", chooseColor);
  }
}

createGrid(16);

//Let's user change the amount of squares
button.addEventListener("click", () => {
  let userGrid = Number(prompt("How many squares do you want?"));
  while (userGrid > 100) {
    userGrid = Number(prompt("Enter number lower that 100"));
  }
  grid.innerHTML = "";
  createGrid(userGrid);

  //Returns original grid if user cancels prompt or enters a string
  if (userGrid == "" || isNaN(userGrid)) {
    createGrid(16);
  }
});

//Creates random rgb color
function randomRGB() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let rgbColor = "rgb(" + x + "," + y + "," + z + ")";
  return rgbColor;
}

//Let's you choose between default and random colors
function chooseColor() {
  if (color == "random") {
    this.style.backgroundColor = randomRGB();
  } else {
    this.style.backgroundColor = color;
  }
}

function setColor(colorChoice) {
  color = colorChoice;
}

//Clears the board
const deleteButton = document
  .querySelector(".delete")
  .addEventListener("click", clearBoard);

function clearBoard() {
  let divs = document.querySelectorAll(".cell");
  divs.forEach((div) => (div.style.backgroundColor = "white"));
}
