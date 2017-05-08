import React from 'react'

const MatrixTile = (props) => (

  <span className=' btn btn-sq-sm' onClick={props.onClick}>{props.tile}</span>
)

export default MatrixTile
