import React, { Component } from 'react';

import Matrix from './components/Matrix'
import MatrixCreator from './components/MatrixCreator'
import MatrixScore from './components/MatrixScore'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    let defaultRows = 4
    let defaultColumns = 4
    let defaultMatrix = this.createMatrix(defaultRows, defaultColumns)
    this.state = {
      matrix: defaultMatrix
    }


    this.toggleTile = this.toggleTile.bind(this)

    this.handleClick = this.handleClick.bind(this)
  }

  createMatrix(n, m) {
    return Array(n).fill(0).map(x => Array(m).fill(0))
  }

  toggleTile(rIndex, cIndex) {
    let newMatrix = this.state.matrix.slice()
    newMatrix[rIndex][cIndex] === 0 ? newMatrix[rIndex][cIndex] = 1 : newMatrix[rIndex][cIndex] = 0
    debugger
    this.setState({
      matrix: newMatrix
    })
  }



  handleClick(rows, cols) {
    rows = parseInt(rows, 10)
    cols = parseInt(cols, 10)

    if (cols <= 10 && rows <= 10) {
      this.setState({
        matrix: this.createMatrix(rows, cols)
      })
    }
  }



  render() {
    let passScoreMatrix = [].concat(this.state.matrix)
    let passMatrixMatrix = [].concat(this.state.matrix)
    return (
      <div className="App">
        <div>
          <MatrixCreator handleClick={this.handleClick} />
          <Matrix matrix={passMatrixMatrix} toggleTile={this.toggleTile} />
        </div>
        <div>
          <MatrixScore matrix={passScoreMatrix} />
        </div>
      </div>
    );
  }
}

export default App;
