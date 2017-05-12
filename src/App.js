import React, { Component } from 'react'
import List from './List'
const arr = []
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listArr: [],
      another: []
    }
  }
  listItem(){
    arr.push(this.textInput.value)
    this.setState({
      listArr: arr,
      another: arr
    })
  }
  filterItem () {
    const filterValue  = this.state.listArr.filter((n) => n.startsWith(this.filterInput.value))
    this.setState({
      another: filterValue
    })
  }
  render () {
    return (
      <div>
        <input ref={(input) => { this.textInput = input }} />
        <button onClick={this.listItem.bind(this)}>click</button><br /><br />
        <input onChange={this.filterItem.bind(this)}ref={(input) => { this.filterInput = input }} />
        <ul>
          {this.state.another.map((n) => <List propsList={n} />)}
        </ul>
      </div>
    )
  }
}

export default App
