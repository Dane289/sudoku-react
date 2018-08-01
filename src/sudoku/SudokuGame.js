import React, { Component } from 'react'
import Sudoku from './Sudoku'
import Timer from './timer/timer'
import Difficulty from './difficulty/difficulty'

class SudokuGame extends Component {
    constructor(props) {
        super(props);
        this.elementChanged = this.elementChanged.bind(this);
        this.state = {
            newGame: true,
            timeInSeconds: 0,
            timer: setInterval(this.counter, 1000),
            difficultyLevel: 20,
            board: Array.apply(null, Array(82)).map(Number.prototype.valueOf,0)
        }
    }

    resetTimer = (e) => {
        this.setState({ timeInSeconds: 0 });
    }

    difficultyChanged = (e) => {
        this.setState({ difficultyLevel: e.target.value });
    }

    elementChanged = (newBoard) => {
        this.setState({board:newBoard})
    }

    counter = () => {
        this.setState({ timeInSeconds: this.state.timeInSeconds + 1 });
    }

    onStartGame = () => {
        URL = "http://localhost:3000" + "/getPuzzle"; 
        fetch(URL).then((response) =>  response.json()).then((response)=>        
           { 
            for (let index = 0; index < response.length; index++) {
                if(response[index]===null) {
                    response[index] = 0;
                }
                
            }
            
            this.setState({
                timeInSeconds: 0,
                newGame: false,
                board:response
        })
    }
    );
       
    }


    render() {
        const content = this.state.newGame ? 
            <div>
                <Difficulty difficultyChanged={this.difficultyChanged} difficultyLevel={this.state.difficultyLevel} />
                <button onClick={() => this.onStartGame()}>Start game!</button>
            </div> : 
            <div> 
                <Sudoku sudokuBoard={this.state.board} elementChanged={this.elementChanged} resetHandler={this.resetTimer} stopTimer={this.stopTimer} /> 
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