import React from 'react'

import MatrixTile from './MatrixTile'


class Matrix extends React.Component {

  constructor() {
    super()
    this.renderMatrixRows = this.renderMatrixRows.bind(this)
  }

  renderMatrixRows() {
    return this.props.matrix.map((row, rIndex) => {
      return <div key={'rIndex-' + rIndex}>{this.renderMatrixTiles(row, rIndex)}</div>
    })
  }

  renderMatrixTiles(row, rIndex) {
    return row.map((tile, cIndex) => {
      return <MatrixTile key={rIndex + '-' + cIndex} tile={tile} onClick={this.props.toggleTile.bind(null, rIndex, cIndex)} />
    })
  }


  render() {
    return (
      <div className='matrix'>
        {this.renderMatrixRows()}
      </div>
    )
  }
}

export default Matrix
