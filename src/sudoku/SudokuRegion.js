import React, { Component } from 'react';
import SudokuInput from './SudokuInput';
import './Sudoku.css';

class SudokuRegion extends Component {
    constructor(props) {
        super(props)
        this.state = {sudokuBoard : props.sudokuBoard,
                      regionX: props.regionNo[0],
                      regionY: props.regionNo[1] };
    }

    createRow = () => {
        let row1 = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                row1.push(
                    <SudokuInput 
                        board={this.state.sudokuBoard} 
                        locationX={this.state.regionX * 3 + i} 
                        locationY={this.state.regionY * 3 + j} 
                    />);
            }
        }
        return row1;
    }

    render(props) {
        return (
            <div className="region "> 
                {this.createRow()}
            </div>
        );
    }
}

export default SudokuRegion