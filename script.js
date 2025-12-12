const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submitBtn");
const gridContainer = document.getElementById("grid-container");
const form = document.getElementById("form");
const colorContainer = document.getElementById("color-container");

const blackPen = document.getElementById("black-pen");
const redPen = document.getElementById("red-pen");
const bluePen = document.getElementById("blue-pen");
const rainbowPen = document.getElementById("rainbow-pen");
const eraser = document.getElementById("eraser");

submitBtn.addEventListener("click", () => {
  const gridSize = Number(userInput.value);

  if (isNaN(gridSize)) {
    alert("Please enter a number!");
  } else if (gridSize < 1 || gridSize > 100) {
    alert("Please enter a number between 1 and 100!");
  } else {
    console.log("User entered:", gridSize);

    // Grid function start here
  }
});
