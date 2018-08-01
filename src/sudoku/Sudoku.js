import React, { Component } from 'react';
import SudokuRegion from './SudokuRegion'
import './Sudoku.css';
import { isFull } from "./functions";
import { isBoardValid } from "./functions";
import { changeSudokuBoard } from "./functions";

class Sudoku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elementChanged: props.elementChanged,
            boardComplete: false
        }
        this.onElementValueChange = this.onElementValueChange.bind(this);
    }

    defaultBoard = [1, 2, 3, 0, 2, 3, 1, 2, 3,
        4, 5, 6, 4, 5, 6, 4, 5, 6,
        7, 8, 9, 7, 8, 9, 7, 8, 9,

        2, 3, 1, 2, 3, 1, 2, 3, 1,
        5, 6, 4, 5, 6, 4, 5, 6, 4,
        8, 9, 7, 8, 9, 7, 8, 9, 7,

        3, 2, 1, 3, 2, 1, 3, 2, 1,
        6, 5, 4, 6, 5, 4, 6, 5, 4,
        9, 8, 7, 9, 8, 7, 9, 8, 7];

    onElementValueChange = (board, i, j, newValue) => {
        var newBoard = changeSudokuBoard(board, i, j, newValue);
        console.log(newBoard);
        this.setState({
            boardComplete: isBoardValid(newBoard) && isFull(newBoard)
        });

        this.state.elementChanged(newBoard);
    }

    createSudokuGame = (props) => {
        let game = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                game.push(
                    <SudokuRegion
                        key={3 * i + j}
                        regionNo={[i, j]}
                        sudokuBoard={props.sudokuBoard}
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
                {!this.state.boardComplete && this.createSudokuGame(this.props)}
                {this.state.boardComplete && <h1>Game Complete!</h1>}
                <button onClick={(e) => this.onClick(e, this.props)}>Reset</button>
            </div>
        );
    }
}

export default Sudoku;

