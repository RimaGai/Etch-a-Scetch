const gridSquares = 8;
const grid = document.querySelector(".container");

function createGrid(gridTotal) {
  for (let i = 0; i < gridTotal; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < gridTotal; j++) {
      const gridSize = 600 / gridSquares;
      const cell = document.createElement("div");
      cell.style.width = `${gridSize}px`;
      cell.style.height = `${gridSize}px`;
      cell.classList.add("cell");
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
