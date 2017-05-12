import React, { Component } from 'react'

class List extends Component {
  render () {
    return (
      <div>
        <li>{this.props.propsList}</li>
      </div>
    )
  }
}

export default List
