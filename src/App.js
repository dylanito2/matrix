import React, { Component } from 'react';

import Matrix from './components/Matrix'
import MatrixCreator from './components/MatrixCreator'
import MatrixScore from './components/MatrixScore'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    let defaultRows = 10
    let defaultColumns = 10
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
    this.setState({
      matrix: newMatrix
    })
  }



  handleClick(rows, cols) {
    rows = parseInt(rows, 10)
    cols = parseInt(cols, 10)

    if (cols <= 25 && rows <= 25) {
      this.setState({
        matrix: this.createMatrix(rows, cols)
      })
    }
  }

  render() {

    return (
      <div className="container">
        <div className='row padding'>
          <div className='col-md-9'>
            <MatrixCreator handleClick={this.handleClick} />
            <Matrix matrix={this.state.matrix} toggleTile={this.toggleTile} />
          </div>
          <div className='col-md-3'>
            <MatrixScore matrix={this.state.matrix} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
