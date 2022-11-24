const button = document.querySelector(".size-button");
const grid = document.querySelector(".container");

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
    cell.addEventListener("mouseenter", (e) => {
      e.target.style.backgroundColor = "grey";
    });
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
});
