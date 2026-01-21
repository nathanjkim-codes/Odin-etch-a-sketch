// Get DOM elements
const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submitBtn");
const gridContainer = document.getElementById("grid-container");

// CreateGrid function
function createGrid(size) {
  // Clear existing grid
  gridContainer.innerHTML = "";
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let totalCells = size * size;
  for (let i = 0; i < totalCells; i++) {
    // Create a new div element as a single grid cell
    let cell = document.createElement("div");
    // Add a CSS class
    cell.classList.add("grid-cell");

    // Mouseover event for progressive darkening
    cell.addEventListener("mouseover", (e) => {
      // If black pen is selected, apply progressive darkening
   if (document.getElementById("black-pen").checked) {
    let currentOpacity = Number(e.target.dataset.opacity) || 0;

    if (currentOpacity < 1) {
      currentOpacity += 0.1;
    }
    e.target.dataset.opacity = currentOpacity;
    e.target.style.backgroundColor = "black";
    e.target.style.opacity = currentOpacity;
   }
   // other pen modes (non-black pens)
  else {
    e.target.style.opacity = 1; // opacity 초기화
    e.target.style.backgroundColor = getSelectedPenColor();
  }
});
}

// Button click event
submitBtn.addEventListener("click", () => {
  const gridSize = Number(userInput.value);

  if (isNaN(gridSize)) {
    alert("Please enter a number!");
  } else if (gridSize < 1 || gridSize > 100) {
    alert("Please enter a number between 1 and 100!");
  } else {
    createGrid(gridSize);
  }
});

createGrid(16);

const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {
  const cells = document.querySelectorAll(".grid-cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
});

function getSelectedPenColor() {
  if (document.getElementById("black-pen").checked) {
    return "black";
  }
  if (document.getElementById("red-pen").checked) {
    return "red";
  }
  if (document.getElementById("blue-pen").checked) {
    return "blue";
  }
  if (document.getElementById("rainbow-pen").checked) {
    return `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  if (document.getElementById("eraser").checked) {
    return "white";
  }
}
