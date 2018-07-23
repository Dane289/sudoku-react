import React from 'react';

const Timer = (props) => {
    let minutes = Math.floor(props.timeInSeconds/60);
    let seconds = "";
    
    if(props.timeInSeconds % 60 < 10) {
        seconds = "0" + props.timeInSeconds % 60;
    } else {
        seconds = props.timeInSeconds % 60;
    }

    return(
        <div className="timer">
            <p>{minutes}:{seconds} </p>
        </div>
    );
}

export default Timer; 