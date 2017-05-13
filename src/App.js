import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      filterItems: [],
      curItem: ''
    }
    this._addItem = this._addItem.bind(this)
    this._doSearch = this._doSearch.bind(this)
    this.tempItems = []
  }

  render () {
    return (
      <div className='App'>
        <label className='App-Entry'>Add Items: <br />
          <input
            onChange={e => this.setState({
              curItem: e.target.value
            })}
            value={this.state.curItem}
            placeholder='John Doe'
          />
          <button onClick={this._addItem}>Add</button>
        </label>
        <label className='App-Search'>Search: <br />
          <input
            placeholder='J...'
            onChange={this._doSearch}
          />
        </label>
        <ul className='App-List'>
          {this.state.filterItems.length > 0
            ? this.state.filterItems.map((el, idx) => <li key={idx}>{el}</li>)
            : this.state.items.map((el, idx) => <li key={idx}>{el}</li>)}
        </ul>
      </div>
    )
  }

  _addItem () {
    this.tempItems.push(this.state.curItem)
    this.setState({
      items: this.tempItems,
      curItem: ''
    })
  }

  _doSearch (e) {
    const filtered = this.state.items.filter(el => RegExp(`${e.target.value}`).test(el))
    if (filtered.length === 0 && e.target.value.length > 0) {
      filtered.push('No matching Items found.')
    }
    this.setState({
      filterItems: filtered
    })
  }
}

export default App
