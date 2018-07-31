import React, { Component } from 'react'
import Sudoku from './Sudoku'
import Timer from './timer/timer'
import Difficulty from './difficulty/difficulty'

class SudokuGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newGame: true,
            timeInSeconds: 0,
            timer: setInterval(this.counter, 1000),
            difficultyLevel: 20
        }
    }

    resetTimer = (e) => {
        this.setState({ timeInSeconds: 0 });
    }

    difficultyChanged = (e) => {
        this.setState({ difficultyLevel: e.target.value });

    }

    counter = () => {
        this.setState({ timeInSeconds: this.state.timeInSeconds + 1 });
    }

    onStartGame = () => {
        this.setState({
            timeInSeconds: 0,
            newGame: false
        });
    }

    render() {
        const content = this.state.newGame ? 
            <div>
                <Difficulty difficultyChanged={this.difficultyChanged} difficultyLevel={this.state.difficultyLevel} />
                <button onClick={() => this.onStartGame()}>Start game!</button>
            </div> : 
            <div> 
                <Sudoku resetHandler={this.resetTimer} stopTimer={this.stopTimer} /> 
                <Timer timeInSeconds={this.state.timeInSeconds} /> 
            </div>
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default SudokuGame