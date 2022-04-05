//! 1. Generate a Grid:
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
// cell.innerHTML = i
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




