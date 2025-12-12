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
}

// Button click event
submitBtn.addEventListener("click", () => {
  const gridSize = Number(userInput.value);

  if (isNaN(gridSize)) {
    alert("Please enter a number!");
  } else if (gridSize < 1 || gridSize > 100) {
    alert("Please enter a number between 1 and 100!");
  } else {
    console.log("User entered:", gridSize);
  }
});
