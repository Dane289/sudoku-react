import React from 'react';
import ReactDOM from 'react-dom';

import Sudoku from './Sudoku';
import SudokuInput from './SudokuInput';

it('renders without crashing', () => {
    let div = document.createElement("div");
    ReactDOM.render(<Sudoku sudokuBoard={Array.apply(null, Array(82)).map(Number.prototype.valueOf,0)} />, div);
    ReactDOM.unmountComponentAtNode(div);
});