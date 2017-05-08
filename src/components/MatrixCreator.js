import React from 'react'

class MatrixCreator extends React.Component {

  constructor() {
    super()
    this.state = {
      rows: 10,
      columns: 10
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
  }

  handleCreate() {
    this.props.handleClick(this.state.rows, this.state.columns)
  }


  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className='form-container'>
        <div className='input-labels'>
          <div>Rows: </div>
          <div>Columns: </div>
        </div>
        <div className='input-fields'>
          <div><input type='text' name='rows' value={this.state.rows} onChange={this.handleChange} /></div>
          <div><input type='text' name='columns' value={this.state.columns} onChange={this.handleChange} /></div>
        </div>
        <div><input type='submit' value='Resize Matrix' className='btn-create' onClick={this.handleCreate} /></div>
      </div>
    )
  }
}

export default MatrixCreator
