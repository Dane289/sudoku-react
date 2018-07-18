import React, { Component } from 'react';
import './App.css';
import Header from './header/Header'
import Sudoku from './sudoku/Sudoku'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sudoku />
      </div>
    );
  }
}

export default App;
