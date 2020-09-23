/* Write your code below */
class Matrix {
  constructor(numRows, numCols) {
    this.matrix = this.generateMatrix(numRows, numCols)
  }
  generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1

    for (let r = 0; r < numRows; r++) {
      matrix.push([])
      for (let c = 0; c < numColumns; c++) {
        matrix[r].push(num++)
      }
    }
    return matrix
  }
  get(rowNum, colNum) {
    return this.matrix[rowNum][colNum]
  }
  printRow(rowNum) {
    for (let col = 0; col < this.matrix[rowNum].length; col++) {
      console.log(this.get(rowNum, col))
    }
  }
  printColumn(colNum) {
    for (let row = 0; row < this.matrix.length; row++) {
      console.log(this.get(row, colNum))
    }
  }
  print() {
    let output = ""
    for (let row = 0; row < this.matrix.length; row++) {
      output += "\n"
      for (let col = 0; col < this.matrix[row].length; col++) {
        output += this.get(row, col) + "\t"
      }
    }
    console.log(output)
  }
  alter(row, col, newValue) {
    this.matrix[row][col] = newValue
  }
  findCoordinate(value) {
    let coordinates = { x: null, y: null }
    for (let row = 0; row < this.matrix.length; row++) {
      for (let col = 0; col < this.matrix[row].length; col++) {
        if (this.get(row, col) === value) {
          coordinates.x = col
          coordinates.y = row
        }
      }
    }
    return coordinates
  }
}

let m = new Matrix(3, 4)

// Exercise 1 tests:
m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/

m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)


// Exercise 2 tests:
console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}

/* Do not remove the exports below */
module.exports = Matrix
