import React from 'react';
import { useTimer } from 'react-timer-hook';


export default function TimerPage() {

  const MyTimer = ({ expiryTimestamp })=>{
    const {
      seconds,
      minutes,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => {alert('ENDED!!!')} });
  
  
    return (
      <div className='jusitfy-center text-very-black font-miki font-semibold tracking-[3px]'>
        <div className='text-[100px]'>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time)
        }}>Restart</button>
      </div>
    );
  }
  



  const time = new Date();
  time.setSeconds(time.getSeconds() + 15); // 10 minutes timer
  return (
    <div className='w-full flex items-center jusitfy-center px-[50px]'>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}