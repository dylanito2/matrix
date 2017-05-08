import React from 'react'


class MatrixScore extends React.Component {

  constructor(props) {
    super(props)
    this.renderScore = this.renderScore.bind(this)
    this.processData = this.processData.bind(this)
  }

  fill(matrix, i, j, rowLen, colLen) {
    let arr = matrix.slice()
    if (i < 0 || i >= rowLen || j < 0 || j >= colLen) {
      return 0;
    }
    else if (arr[i][j]) {
      arr[i][j] = 0;
      return 1 + this.fill(arr, i-1, j, rowLen, colLen)
      + this.fill(arr, i, j-1, rowLen, colLen)
      + this.fill(arr, i-1, j-1, rowLen, colLen)
      + this.fill(arr, i+1, j, rowLen, colLen)
      + this.fill(arr, i, j+1, rowLen, colLen)
      + this.fill(arr, i+1, j+1, rowLen, colLen)
      + this.fill(arr, i+1, j-1, rowLen, colLen)
      + this.fill(arr, i-1, j+1, rowLen, colLen);
    }
    return 0;
  }

  processData() {
    let matrix = this.props.matrix.slice(0)
    let rowLen = matrix.length;
    let colLen = matrix[0].length;
    let largest = 0;
    let result = 0;

    for (let i = 0; i < rowLen; i++) {
      for (let j = 0; j < colLen; j++) {
        largest = this.fill(matrix, i,j, rowLen, colLen);
        result = (largest > result) ? largest : result;
      }
    }
    console.log(result);
  }
  //  [ j - 1 ][ k - 1 ]
  //  [ j - 1 ][ k ]
  //  [ j - 1 ][ k + 1 ]
  //  [ j ][ k - 1]
  //  [ j ][ k + 1 ]
  //  [ j + 1][k - 1 ]
  //  [ j + 1 ][ k ]
  //  [ j + 1 ][ k + 1 ]

  renderScore() {
    return <span>1000</span>
  }

  render() {
    return (
      <div className='score'>
        <button onClick={this.processData}> PROCESS </button>
      </div>
    )
  }
}

export default MatrixScore
