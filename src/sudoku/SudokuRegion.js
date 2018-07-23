import SudokuInput from './SudokuInput';
import './Sudoku.css';
import React from 'react';

const createRow = (props) => {
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

const SudokuRegion = (props) => {
    return (
        <div className="region ">
            {createRow(props)}
        </div>
    );
}


export default SudokuRegion