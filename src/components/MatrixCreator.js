import React from 'react'

class MatrixCreator extends React.Component {

  constructor() {
    super()
    this.state = {
      rows: 4,
      columns: 4
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
      <div>
        R: <input type='text' name='rows' value={this.state.rows} onChange={this.handleChange} />
        C: <input type='text' name='columns' value={this.state.columns} onChange={this.handleChange} />
        <button onClick={this.handleCreate}>Create Matrix</button>
      </div>
    )
  }
}

export default MatrixCreator
