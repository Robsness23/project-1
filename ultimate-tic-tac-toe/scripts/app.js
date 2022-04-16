// DOM elements
const bigGrid = document.querySelector('.bigGrid')
const weeGrid = document.querySelector('.weeGrid')
const cells = []
const weeCells = []

// Global variables

// bigGrid
const width = 3
const totalCells = width * width



// weeGrid 
const weeGridWidth = 3
const totalWeeCells = weeGridWidth * weeGridWidth


let click = 3
const player1 = "X"
const player2 = "O"
let isGameStarted = false
const isCellClickable = true
let lastGo = 0
const player1Array = []
const player2Array = []


const winningCombos = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '5', '9'],
  ['3', '5', '7'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9']
]
console.log('bigGrid', bigGrid)
console.log('weeGrid', weeGrid)
console.log('cells:', cells)
console.log('weeCells:', weeCells)
console.log('winningCombos', winningCombos)


// 1. Function to generate the grid, assign eventListener to each 
// div & assign 1st click event to player1 and 2nd click event to player2
// 2. Adds symbols for each player 
// 3. Sets the attribute ID with the index number
// 4. Assigns player2 and player1 based on the number of clicks and whether they can 
//    be divided by the modular 
// 5. Calling other functions within this function as this is the function where all
//    the magic happens

function generateBigGrid() {
  for (let i = 1; i < totalCells + 1; i++) {    
    const cell = document.createElement('div')    
    bigGrid.appendChild(cell)    
    cells.push(cell)
    cell.addEventListener('click', () => {
      // cell.classList.add('bigGridWinSymbol')
    })
    for (let i = 1; i < totalCells + 1; i++) {
      const weeCell = document.createElement('div') 
      cell.appendChild(weeCell)
      weeCells.push(weeCell)
      weeCell.setAttribute('id', i)
      // console.log(weeCell.innerHTML = i)
      weeCell.addEventListener('click', (event)=> playGame(event, weeCell), { once: true })
    }
  }
}
generateBigGrid()



function playGame(event, weeCell) {  
  playAnywhere(event, weeCell)
  lastGo = console.log('event.target.id:', parseInt(event.target.id))
  if (isCellClickable){    
    weeCell.classList.add('symbols')  
    click = click + 1
    isGameStarted = true
    console.log('isGameStarted', isGameStarted)
    if (click % 2 !== 0) {
      weeCell.innerHTML = player2
      player2Array.push(event.target.id)  
      console.log('player2Array', player2Array)
    } else if (click % 2 === 0) {
      weeCell.innerHTML = player1
      player1Array.push(event.target.id)
      console.log('player1Array', player1Array)
    } 
    
    checkWinnerPlayer1()
    checkWinnerPlayer2()
  }
}
function playAnywhere(event, isCellClickable) {
  return (
    (isCellClickable)) && 
    ((isGameStarted) || (lastGo === console.log('event.target.parentElement.id:', (event.target.parentElement.id))))
} 


// 1. Creating subArray with player1's choices and then filtering those against 
//    the winningCombos to see whether player1 wins
// 2. Alerting, after short timeout if player1 wins 
// 3. Call the function in the generateGrid function
// 4. Added draw logic

function checkWinnerPlayer1 () {
  const player1HasWon = winningCombos.filter( subArray =>
    subArray.every(elem => player1Array.includes(elem))
  )
  if (player1HasWon[0]) {
    setTimeout(function(){
      alert('X is the winner')
      // window.location.reload()
    }, 50);
  } else if (player1Array.length + player2Array.length === 9) {
    setTimeout(function(){
      alert('It\'s a draw')
      // window.location.reload()
    }, 50);
  }
}

// 1. Creating subArray with player2's choices and then filtering those against 
//    the winningCombos to see whether player2 wins
// 2. Alerting, after short timeout if player2 wins
// 3. Call the function in the generateGrid function

function checkWinnerPlayer2 () {
  const player2HasWon = winningCombos.filter( subArray => 
    subArray.every(elem => player2Array.includes(elem))
  )
  if (player2HasWon[0]) {
    setTimeout(function(){  
      alert('O is the winner')
      // window.location.reload()
    }, 50);
  } 
}



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




