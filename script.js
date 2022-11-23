const gridSquares = 8;
const grid = document.querySelector(".container");
const button = document.querySelector(".button");

function createGrid(gridTotal) {
  for (let i = 0; i < gridTotal; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < gridTotal; j++) {
      const gridSize = 600 / gridSquares;
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = `${gridSize}px`;
      cell.style.height = `${gridSize}px`;
      row.appendChild(cell);

      //hover effect for changing background color
      cell.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "grey";
      });
    }
    grid.appendChild(row);
  }
}
createGrid(gridSquares);

button.addEventListener("click", () => {
  let userGrid = Number(prompt("How many squares do you want?"));
  while (userGrid > 100) {
    userGrid = Number(prompt("Enter number lower that 100"));
  }
  grid.replaceChildren();
  createGrid(userGrid);
});
