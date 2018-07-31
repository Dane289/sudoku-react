import React, { Component } from 'react'

class Difficulty extends Component {

    difficultyChanged = (props, e) => {
        props.difficultyChanged(e);
        this.setState({ difficultyLevel: e.target.value });
    }

    render() {
        let diff;
        let level = this.props.difficultyLevel;
        if(level <= 29){
            diff = "easy";
        } else if(level > 29 && level <46) {
            diff = "medium"
        } else if (level < 56) {
            diff = "hard"
        } else if(level < 74) {
            diff = "inhumane"
        } else 
            diff = "god like"
        return (
            <div>
                <input type="range" step={5} min={20} max={95} value={this.props.difficultyLevel} onChange={(e) => this.difficultyChanged(this.props, e)} ></input>
                <p>Difficulty: {diff}</p>
            </div>
        )
    }
}

export default Difficulty;