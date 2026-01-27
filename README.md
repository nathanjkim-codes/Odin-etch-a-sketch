# Etch-a-Sketch Project

## Description

A simple web-based Etch-a-Sketch game built with HTML, CSS, and JavaScript.  
Draw on a grid by hovering over cells, choose different pen colors, and clear your drawing at any time.

## How It Works

- Enter a grid size (1-100) in the input box and click **Submit** to create the grid.
- Hover over grid cells to draw.
- Choose a pen color:
  - Black (with progressive darkening)
  - Red
  - Blue
  - Rainbow (random colors)
  - Eraser (white)
- Click **Clear** to reset the grid.

## What I Learned

- **DOM Manipulation:**  
  Created grid cells dynamically using `document.createElement` and attached them to the container with `appendChild`.

- **Event Handling:**  
  Added `mouseover` event listeners to detect when the user hovers over a cell and change its color according to the selected pen.

- **State Management with dataset:**  
  Tracked the progressive darkening of each cell with `dataset.opacity` when using the black pen.

- **Conditional Logic for Pen Selection:**  
  Implemented `getSelectedPenColor()` with conditional statements to apply different colors based on the selected pen.

- **Responsive Grid:**  
  Designed a flexible layout using CSS Grid with `grid-template-columns` and `grid-template-rows` to adjust automatically to the grid size.

## Tech stack

- HTML
- CSS
- JavaScript
