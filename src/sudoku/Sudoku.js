import React, { Component } from 'react';
import SudokuRegion from './SudokuRegion'
import './Sudoku.css';
import {isFull} from "./functions";
import {isBoardValid} from "./functions";
import {changeSudokuBoard} from "./functions";

class Sudoku extends Component {
    constructor (props)  {
        super(props);
        this.state = {
            sudokuBoard : [8,2,7,1,5,4,3,9,6,
                                     9,6,5,3,2,7,1,4,8,
                                     3,4,1,6,8,9,7,5,2,

                                     5,9,3,4,6,8,2,7,1,
                                     4,7,2,5,1,3,6,8,9,
                                     6,1,8,9,7,2,4,3,5,

                                     7,8,6,2,3,5,9,1,4,
                                     1,5,4,7,9,6,8,2,3,
                                     2,3,9,8,4,1,5,6,7],
            boardComplete : false
        }
        this.onElementValueChange = this.onElementValueChange.bind(this);
    }

     defaultBoard =  [1,2,3, 0,2,3, 1,2,3,
                         4,5,6, 4,5,6, 4,5,6,
                         7,8,9, 7,8,9, 7,8,9,

                         2,3,1, 2,3,1, 2,3,1,
                         5,6,4, 5,6,4, 5,6,4,
                         8,9,7, 8,9,7, 8,9,7,

                         3,2,1, 3,2,1, 3,2,1,
                         6,5,4, 6,5,4, 6,5,4,
                         9,8,7, 9,8,7, 9,8,7];

    onElementValueChange =  (i, j, newValue) => {
        var newBoard = changeSudokuBoard(this.state.sudokuBoard, i, j, newValue);
        
        
        this.setState({
            boardComplete : isFull(newBoard) && isBoardValid(newBoard),
            sudokuBoard : newBoard});
        
    }

    createSudokuGame = () => {
        let game = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                game.push(
                <SudokuRegion 
                    key={3 * i + j}
                    regionNo={[i,j]} 
                    sudokuBoard={this.state.sudokuBoard} 
                    handleChange={this.onElementValueChange}
                    cevaTest={this.state.cevaTest}
                />)
            }
        }
        return game;
    }

    onClick = (e, props) => {
        props.resetHandler();
        this.setState({
            sudokuBoard: this.defaultBoard,
            boardComplete: false,
        });
    }


    render() {
        return (
            <div className="sudokuContainer">
                {!this.state.boardComplete && this.createSudokuGame()}
                {this.state.boardComplete && <h1>Game Complete!</h1>}
                <button onClick={(e) => this.onClick(e, this.props)}>Reset</button>
            </div>
        );
    }
}

export default Sudoku;

