const gridSize = 16;
const grid = document.querySelector(".container");

function createGrid(gridTotal) {
  for (let i = 0; i < gridTotal; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < gridTotal; j++) {
      const squareSize = 960 / gridSize;
      const column = document.createElement("div");
      column.style.width = `${squareSize}px`;
      column.style.height = `${squareSize}px`;
      column.classList.add("column");
      row.appendChild(column);
    }
    grid.appendChild(row);
  }
}
createGrid(gridSize);
