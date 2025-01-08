// Timer with Pause and Reset:
// Create a countdown timer that starts at a given number of seconds.
// Use useState to manage the time and useEffect to decrease the time every second.
// Add buttons to pause, resume, and reset the timer.


import React, { useEffect, useState } from 'react'

const Timer = () => {
    const[intialseconds, setIntialseconds] = useState(0);
    const[seconds, setSeconds] = useState(null);
    const[message, setMessage] = useState('');
    const[pause, setPause] = useState(false);

    useEffect(() => {
        let interval;
        if(pause){
            setSeconds(seconds);
            return () => clearInterval(interval); 
        }
        function updateTimer() {
            setSeconds((prev) => prev - 1); 
        }
        if (seconds > 0) {
            interval = setInterval(updateTimer, 1000); 
            setMessage('');
            return () => clearInterval(interval); 
        }
        
    }, [seconds, pause]);

    function getSeconds(event){
        let seconds = event.target.elements.time.value;
        event.preventDefault();
        if (isNaN(seconds) || seconds <= 0) {
            setMessage('Please enter a valid positive number');
            return;
        }
        setSeconds(seconds);
        setIntialseconds(seconds);
        event.target.elements.time.value = '';
    }
    const handlePause = () => {
        setPause(true);
    }
    const handleResume = () => {
        setPause(false);
    }
    const handleReset = () => {
        setSeconds(intialseconds);
        setPause(true);
    }
    
  return (
    <div>
        <h1>Timer</h1>
        <form onSubmit={getSeconds}>
            <label htmlFor="time">Enter the seconds:</label>
            <input type="number" id='time'/>
            <button type="submit">Start Timer</button>
            
        </form>
        { seconds && seconds > 0 ? 
            (<div>
                <p>Countdown begun : {seconds}</p>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleResume}>Resume</button>
                <button onClick={handleReset}>Reset</button>
            </div>) : ('')
        }
        <br/> 
        {message && <span style={{color: "red"}}>{message}</span>}
    </div>
  )
}

export default Timer


