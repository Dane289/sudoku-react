import React, { Component } from 'react';
import SudokuInput from './SudokuInput';
import './Sudoku.css';

class SudokuRegion extends Component {
    constructor(props) {
        super(props);
    }


    createRow = (props) => {
        let row1 = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                row1.push(
                    <SudokuInput 
                        key={3 * i + j}
                        board={props.sudokuBoard} 
                        locationX={props.regionNo[0] * 3 + i} 
                        locationY={props.regionNo[1] * 3 + j} 
                        changeHandler={props.handleChange}
                    />);
            }
        }
        return row1;
    }

    render() {
        return (
            <div className="region "> 
                {this.createRow(this.props)}
            </div>
        );
    }
}

export default SudokuRegion