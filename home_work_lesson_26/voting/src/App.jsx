import React, { Component } from 'react'
import './App.scss'
import { HomePage } from './components/HomePage/HomePage'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <HomePage/>
    )
  }
}

export default App
