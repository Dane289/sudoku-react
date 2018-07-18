import React, {Component} from 'react';
import './Sudoku.css';

class SudokuInput extends Component {
    constructor (props) {
        super(props);
        this.state = {board : props.board, 
                    locationX: props.locationX,
                    locationY: props.locationY};
    }

    getCellValue = () => {
        return this.state.board[9 * this.state.locationX + this.state.locationY];
    }

    render(props) {
        return(
            <input className="numberField" type="text" value={this.getCellValue()}/> 
        );
    }
}

export default SudokuInput;