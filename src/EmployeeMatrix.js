const Matrix = require("./Matrix")
/* Write your code below */
class EmployeeMatrix extends Matrix {
  constructor() {
    super(0, 0)
  }
  loadData(salaryData) {
    let employeesMatrix = []
    salaryData.forEach((employee) => {
      let row = Object.values(employee)
      employeesMatrix.push(row)
    })
    this.matrix = employeesMatrix
  }
  getEmployees(department) {
    const empInDept = []
    this.matrix.forEach((employee) => {
      if (employee[2] === department) {
        empInDept.push(employee[1])
      }
    })
    return empInDept
  }
  getTotalSalary(department) {
    let totalSalary = 0
    this.matrix.forEach((employee) => {
      if (employee[2] === department) {
        totalSalary += employee[3]
      }
    })
    return totalSalary
  }
  findRichest() {
    let richest = this.matrix[0]
    for (let i = 1; i < this.matrix.length; i++) {
      if (this.matrix[i][3] > richest[3]) {
        richest = this.matrix[i]
      }
    }
    return richest[1]
  }
}

let data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 },
]

let m = new EmployeeMatrix()

// Exercise 3 tests:
m.loadData(data)
m.print()
/* expected to print:
e10021  Gillian Finance 2000
e10725  Tibor   Design  1200
e10041  Anisha  Finance 2300
e10411  Jakub   Design  1600
e11995  Mar     Design  1300
e10732  Nisha   Design  1200 */

// Exercise 4 tests:
console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

// Exercise 5 tests:
console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300

// Exercise 6 tests:
console.log(m.findRichest()) //prints Anisha

/* Do not remove the exports below */
module.exports = EmployeeMatrix
