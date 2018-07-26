import React, { Component } from 'react';
import './App.css';
import Header from './header/Header'
import Sudoku from './sudoku/Sudoku'
import Timer from './timer/timer'

class App extends Component {
  constructor(props)  {
    super(props);
    this.resetTimer = this.resetTimer.bind(this);
    this.state = {timeInSeconds : 0,
                  timer : setInterval(this.counter, 1000)}
  }

  resetTimer = (e) => {
    this.setState({timeInSeconds : 0});
  }

  counter = () => {
    this.setState({timeInSeconds : this.state.timeInSeconds + 1});
  }

  render() {
    return (
      <div>
        <Header />
        <Sudoku resetHandler={this.resetTimer}/>
        <Timer timeInSeconds={this.state.timeInSeconds}/>
      </div>
    );
  }
}

export default App;
