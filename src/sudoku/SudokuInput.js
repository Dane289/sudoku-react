import React, {Component} from 'react';
import './Sudoku.css';

class SudokuInput extends Component {
    constructor (props) {
        super(props);
        this.state = {
                    handleChange: props.changeHandler,
                };
                
        this.handleChange = this.handleChange.bind(this)
    }

    getCellValue = (board, i, j) => {
        const sudokuValue = board[9 * i + j];
        if(sudokuValue === 0) {
            return "";
        }
        return sudokuValue;
    }


    handleChange(i, j, event)  {
        this.state.handleChange(i, j, Number(event.target.value));
    }

    render() {
        var value = this.getCellValue(this.props.board, this.props.locationX, this.props.locationY);
        return(
            <input className="numberField" pattern="[1-9]{1}"type="text" value={value} onChange={(event) => this.handleChange(this.props.locationX, this.props.locationY, event)} /> 
        );
    }
}

export default SudokuInput;