// !MVP GRID
// DOM elements
const grid = document.querySelector('.grid')
const cells = []

// Grid variables
const width = 3
const totalCells = width * width


// Function to generate the grid, assign eventListener to each 
// div & assign 1st click event to player1 and 2nd click event to player2

let click = 3
const player1 = "X"
const player2 = "O"

function generateGrid() {
  for (let i = 1; i < totalCells + 1; i++) {
    const cell = document.createElement('div')
    grid.appendChild(cell)
    cells.push(cell)
    cell.addEventListener('click', () => {
      click = click + 1
      if (click % 2 !== 0) {
        cell.innerHTML = player2   
      } else if (click % 2 === 0) {
        cell.innerHTML = player1
      }
    })
  }
}
generateGrid()

// ! MVP Game Logic 



//! 1. Ultimate Grid:
//  3x3 grid, which has 3x3 grids within each of those  (81 different squares in total)

//  fill grid with 81 cells
//  const grid = document.querySelector('.grid')
// const width = 9 
// const totalCells = width * width (how to style the wider game?)
// const cells =[]

// fucntion generateGrid() {
// for i it to 0 to totalCells - 1 {
//  const cell = document.createElement('div')
// cell.classList.add('cell')
//  grid.appendChild(cell)
// cells.push(cell)
// }
// }

// generateGrid()

//! 2. Selcting DOM:
// addEventListeners to all divs in the grid as a click will choose which grid cell player is selecting

// const boardGrid = document.querySelectorAll('div')

//! 3. Select the first click as player1 and the second click as player2:
//  player1 = x
//  player2 = o

// boardGrid.addEventListener('click', () => {
  //  const player1 = first click
  // const player2 = second click
// })

//! 4. Set up JS logic:
// if player one clicks in top right corner of the left bottom grid, then player 2
//    can only select from grid in the top right of main grid (highlight playable grid)
// if player is sent to grid that is already fill, make entire grid playable as they can choose where to go
// if player wins three in a row they win that small game (put a strike through their elements)
// if player wins three small games in a row, they totally win (put strike through and announce winner)

//! 5. Announcing winner:
// Alert something on the screen which advises which player won




