const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submitBtn");
const gridContainer = document.getElementById("grid-container");

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
