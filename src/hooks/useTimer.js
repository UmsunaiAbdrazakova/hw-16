import { useState, useEffect } from "react";

const useTimer = (initialMinutes = 1) => {
  const [time, setTime] = useState(initialMinutes * 60); 
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
      setIsActive(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, time]);

  const start = () => {
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
  };

  const restart = () => {
    setTime(initialMinutes * 60); 
    setIsActive(true);
  };

  return {
    time,
    start,
    stop,
    restart,
  };
};

export default useTimer;
