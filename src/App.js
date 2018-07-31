import React, { Component } from 'react';
import './App.css';
import Header from './header/Header'
import SudokuGame from './sudoku/SudokuGame'

class App extends Component {
  constructor(props)  {
    super(props);
     }

  render() {
    return (
      <div>
        <Header />
        <SudokuGame />
      </div>
    );
  }
}

export default App;
