import React, {Component} from 'react';
import './Sudoku.css';

class SudokuInput extends Component {
    constructor (props) {
        super(props);
        var initialValue = this.getCellValue(props.board, props.locationX, props.locationY);
        console.log(initialValue);
        this.state = {board : props.board, 
                    locationX: props.locationX,
                    locationY: props.locationY,
                    handleChange: props.changeHandler,
                    value: initialValue
                };
        // this.handleChange = this.handleChange.bind(this)
    }

    getCellValue = (board, i, j) => {
        
        const sudokuValue = board[9 * i + j];
        if(sudokuValue === 0) {
            return "";
        }
        return sudokuValue;
    }

    handleChange(i, j, event)  {
        this.setState({value : event.target.value});
        console.log(event.target.value);
        this.state.handleChange(i, j, event.target.value);
    }

    render(props) {
        return(
            <input className="numberField" type="text" value={this.props.value} onChange={(event) => this.handleChange(this.state.locationX, this.state.locationY, event)}/> 
        );
    }
}

export default SudokuInput;