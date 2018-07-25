import React from 'react';
import ReactDOM from 'react-dom';

import Sudoku from './Sudoku';
import SudokuInput from './SudokuInput';

it('renders without crashing', () => {
    let div = document.createElement("div");
    ReactDOM.render(<Sudoku/>, div);
    ReactDOM.unmountComponentAtNode(div);
});