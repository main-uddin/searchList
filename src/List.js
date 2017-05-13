import React, { Component } from 'react'

class List extends Component {
  render () {
    return (
      <li>{this.props.text}</li>
    )
  }
}

export default List
