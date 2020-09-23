const Matrix = require("./Matrix")

class TicTacToe extends Matrix {
  constructor() {
    super(0, 0)
    this.lastTurnPlayedBy = 0
    this.remainingPositions = 0
    this.messages = {
      gameWonMsg: `Congratulations player %s!`,
      gameNotWonMsg: `Game over without a winner!`,
      notYourTurnMsg: `It's player %s's turn to play!`,
      positionTakenMsg: `Position %s:%d had been played already`,
    }
  }
  loadBoard() {
    console.log("New board!")
    const board = []
    const item = "."
    const dimensions = 3
    this.remainingPositions = dimensions * dimensions

    for (let r = 0; r < dimensions; r++) {
      board.push([])
      for (let c = 0; c < dimensions; c++) {
        board[r].push(item)
      }
    }
    this.matrix = board
  }
  checkThreeInRow(rowNum, value) {
    let itemsInRowWithValue = this.matrix[rowNum].filter((i) => i === value)
    return itemsInRowWithValue.length === 3 ? true : false
  }
  checkThreeInColumn(columnNum, value) {
    let itemsInColWithValue = 0
    this.matrix.forEach((row) => {
      if (row[columnNum] === value) {
        itemsInColWithValue++
      }
    })
    return itemsInColWithValue === 3 ? true : false
  }

  checkIfGameOver(rowNum, columnNum, value) {
    const isThreeInRow = this.checkThreeInRow(rowNum, value)
    const isThreeInCol = this.checkThreeInColumn(columnNum, value)
    if (this.remainingPositions) {
      if (isThreeInRow || isThreeInCol) {
        console.log(this.messages.gameWonMsg, this.lastTurnPlayedBy)
        this.loadBoard()
      }
    } else {
      if (isThreeInRow && isThreeInCol) {
        console.log(this.messages.gameWonMsg, this.lastTurnPlayedBy)
        this.loadBoard()
      } else {
        console.log(this.messages.gameNotWonMsg)
        this.loadBoard()
      }
    }
  }

  play(rowNum, columnNum, player) {
    if (this.get(rowNum, columnNum) !== ".") {
      console.log(this.messages.positionTakenMsg, rowNum, columnNum)
    } else if (this.lastTurnPlayedBy === player) {
      const expectedPlayer = this.lastTurnPlayedBy === 1 ? 2 : 1
      console.log(this.messages.notYourTurnMsg, expectedPlayer)
    } else {
      const value = player === 1 ? "X" : "O"
      this.alter(rowNum, columnNum, value)
      this.remainingPositions--
      this.lastTurnPlayedBy = player
      this.checkIfGameOver(rowNum, columnNum, value)
    }
  }
}

let board = new TicTacToe()

// Exercise 7 tests:
board.loadBoard()
board.print()
/* expected to print:
.       .       .
.       .       .
.       .       .
 */

// Exercise 8 tests:
board.play(2, 2, 1)
board.play(0, 0, 2)
board.print()
/* expected to print:
o       .       .
.       .       .
.       .       x
 */

// Exercise 9 tests:
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1
board.print()
/* expected to print:
o       .       x
o       .       x
.       .       x
 */

// Extension 1 tests:
board.play(1, 1, 2)
board.play(1, 1, 1)

// Extension 2 tests:
board.play(0, 1, 2)

// Extension 3 tests:
board.print()
board.play(0, 0, 1)
board.play(0, 1, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 2, 1)
board.play(2, 0, 2)
board.play(2, 1, 1)
board.play(2, 2, 2)
