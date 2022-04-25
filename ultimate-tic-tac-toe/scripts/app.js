// DOM elements
const bigGrid = document.querySelector('.bigGrid')
const cells = []
const weeCells = []

// bigGrid
const width = 3
const totalCells = width * width

// Global variables
let click = 1
const player1 = "X"
const player2 = "O"
let isGameStarted = false
let isCellClickable = true
let lastTurn = null

// Arrays 
const player1WeeCellArray = [[], [], [], [], [], [], [], [], [], []]
const player2WeeCellArray = [[], [], [], [], [], [], [], [], [], []]
const player1CellWins = []
const player2CellWins = []
const winningWeeCellCombos = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '5', '9'],
  ['3', '5', '7'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9']
]
const winningCellCombos = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '5', '9'],
  ['3', '5', '7'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9']
]
let disabledCells = []


console.log('bigGrid', bigGrid)
console.log('cells:', cells)
console.log('weeCells:', weeCells)
console.log('winningWeeCellCombos', winningWeeCellCombos)
console.log('winningCellCombos', winningCellCombos)





// 1. Function to generate the grid in a for loop, each cell is 
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
    cell.setAttribute('id', i)
    for (let i = 1; i < totalCells + 1; i++) {
      const weeCell = document.createElement('div') 
      cell.appendChild(weeCell)
      weeCells.push(weeCell)
      weeCell.setAttribute('id', i)
      weeCell.addEventListener('click', (event)=> playGame(event, weeCell), { once: true })
    }
  }
}
generateBigGrid()

//  Two big if statements
function playGame(event, weeCell) {    
  isCellClickable = true    
  console.log('parentElement.id', parseInt(event.target.parentElement.id)) 
  
  // If these conditions aren't met it moves to next if sta
  // After this isCellClickable is still false, then it moves to next if
  if (isGameStarted && lastTurn !== parseInt(event.target.parentElement.id) && lastTurn || disabledCells.includes(weeCell.parentElement.id)) {
    isCellClickable = false 
    // weeCell.parentElement.classList.add('nopeLight')
    alert('This cell is not clickable')
    // maybe add setTimeout for the light to remove it after a bit
  } 
  console.log(isCellClickable)

  if (isCellClickable) {   
    // click anywhere for left condition ORRRR  cell not complete so I can play in that cell
    if ((lastTurn === null && !disabledCells.includes(weeCell.parentElement.id)) || lastTurn) {
      const cellId = weeCell.parentElement.id
      const weeCellId = weeCell.id  
      disabledCells = player2CellWins.concat(player1CellWins) 
      // checking whether cell you are being sent to is playable or not
      if (disabledCells.includes(weeCellId)) {
        lastTurn = null
      } else {
        lastTurn = parseInt(event.target.id)
        // weeCell.parentElement.classList.add('goLight')
      }
      console.log('last turn', lastTurn)
      weeCell.classList.add('symbols')  
      click = click + 1
      isGameStarted = true
      if (click % 2 !== 0) {
        weeCell.innerHTML = player2 
        player2WeeCellArray[cellId].push(weeCellId)                
        checkWeeWinnerPlayer2(cellId)
        checkBoardWinPlayer2()  
                 
      } else if (click % 2 === 0) {
        weeCell.innerHTML = player1
        player1WeeCellArray[cellId].push(weeCellId)                
        checkWeeWinnerPlayer1(cellId)  
        checkBoardWinPlayer1()
      } 
    } else if (isGameStarted && !disabledCells.includes(lastTurn)) {
      weeCell.parentElement.classList.add('goLight')
      isCellClickable = true
      console.log(isCellClickable)
    // this is meant to set up the logic that if a player is sent to a disabledCell they can then click anywhere instead
    }
      
  } else {
    // weeCell.parentElement.classList.add('nopeLight')
    isCellClickable = false 
      
  }
    
  console.log('player2CellWins', player2CellWins)
  console.log('player1CellWins', player1CellWins)
  console.log('disabledCells', disabledCells)
}

function checkWeeWinnerPlayer2 (cellIndex) {
  const player2HasWon = winningWeeCellCombos.filter( subArray => 
    subArray.every(elem => player2WeeCellArray[cellIndex].includes(elem))
  )
  if (player2HasWon[0]) {
    setTimeout(function(){  
      alert('O is the winner of this small grid') 
    }, 50);
    player2CellWins.push(cellIndex)    
    disabledCells.push(cellIndex)
  } else if (player2WeeCellArray[cellIndex] + player1WeeCellArray[cellIndex] === 9) {
    setTimeout(function(){
      alert('It\'s a draw for this small grid')
    }, 50);
  }
}

function checkWeeWinnerPlayer1(cellIndex) {
  const player1HasWon = winningWeeCellCombos.filter( subArray => 
    subArray.every(elem => player1WeeCellArray[cellIndex].includes(elem))
  )
  if (player1HasWon[0]) {
    setTimeout(function(){
      alert('X is the winner of this small grid') 
    }, 50);
    player1CellWins.push(cellIndex)  
    disabledCells.push(cellIndex)   
  } else if (player1WeeCellArray[cellIndex] + player2WeeCellArray[cellIndex] === 9) {
    setTimeout(function(){
      alert('It\'s a draw for this small grid')
    }, 50);
  }
}

function checkBoardWinPlayer2 () {
  const boardWinner2 = winningCellCombos.filter( subArray => 
    subArray.every(elem => player2CellWins.includes(elem))
  )
  if (boardWinner2[0]) {
    setTimeout(function(){  
      alert('O is the ultimate winner!') 
    }, 1000);
    
  } else if (player2CellWins + player1CellWins === 9) {
    setTimeout(function(){
      alert('It\'s a draw')
    }, 1000);
  }
}

function checkBoardWinPlayer1 () {
  const boardWinner1 = winningCellCombos.filter( subArray => 
    subArray.every(elem => player1CellWins.includes(elem))
  )
  if (boardWinner1[0]) {
    setTimeout(function(){  
      alert('X is the ultimate winner!') 
    }, 50);
    
  } else if (player1CellWins + player2CellWins === 9) {
    setTimeout(function(){
      alert('It\'s a draw')
    }, 1000);
  }
}


// !Old basic tic tac toe logic 

// 1. Creating subArray with player1's choices and then filtering those against 
//    the winningCombos to see whether player1 wins
// 2. Alerting, after short timeout if player1 wins 
// 3. Call the function in the generateGrid function
// 4. Added draw logic



// 1. Creating subArray with player2's choices and then filtering those against 
//    the winningCombos to see whether player2 wins
// 2. Alerting, after short timeout if player2 wins
// 3. Call the function in the generateGrid function







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