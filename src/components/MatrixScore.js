import React from 'react'


class MatrixScore extends React.Component {

  constructor(props) {
    super(props)
    this.countCells = this.countCells.bind(this)
  }

  find(matrix, i, j) {

    let rowLength = matrix.length;
    let colLength = matrix[0].length;

    if (i < 0 || i >= rowLength || j < 0 || j >= colLength) {
      return 0
    }

    else if (matrix[i][j]) {

      matrix[i][j] = 0;
      return 1 + this.find(matrix, i-1, j)
      + this.find(matrix, i, j-1)
      + this.find(matrix, i-1, j-1)
      + this.find(matrix, i+1, j)
      + this.find(matrix, i, j+1)
      + this.find(matrix, i+1, j+1)
      + this.find(matrix, i+1, j-1)
      + this.find(matrix, i-1, j+1);
    }
    return 0
  }

  countCells() {
    let newMatrix = this.props.matrix.map((arr) => {
      return arr.slice();
    });
    let rowLength = newMatrix.length;
    let colLength = newMatrix[0].length;
    let largest = 0;
    let result = 0;
    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < colLength; j++) {
        largest = this.find(newMatrix.slice(), i, j);
        result = (largest > result) ? largest : result;
      }
    }
    return <div>{result}</div>
  }

  render() {
    return (
      <div>
        The largest region is:
        <div className='score'>
          {this.countCells()}
        </div>
      </div>
    )
  }
}

export default MatrixScore
