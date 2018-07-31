import React from 'react';

const Timer = (props) => {
    let hours = Math.floor(props.timeInSeconds/3600) ;
    let minutes = Math.floor(props.timeInSeconds/60) % 60;
    let seconds = "";
    
    if(props.timeInSeconds % 60 < 10) {
        seconds = "0" + props.timeInSeconds % 60;
    } else {
        seconds = props.timeInSeconds % 60;
    }

    let minuteDisplay = minutes;
    if(minutes<10 && hours>0) {
        minuteDisplay = "0" + minuteDisplay;
    }
    return(
        <div className="timer">
            {
                hours > 0 && 
                    <p>{hours}:{minuteDisplay}:{seconds}</p>
            }
            {
                hours === 0 &&
                    <p>{minutes}:{seconds}</p>
            }
        </div>
    );
}

export default Timer; 