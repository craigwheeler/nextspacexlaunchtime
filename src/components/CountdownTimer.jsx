import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CountdownTimer = ({ date }) => {
  const countDownDate = new Date(date).getTime();
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }, [countDownDate]);

  return (
    <TimerContainer>
      <div className="time">
        <div className="value">{time.days}</div>
        <div className="unit">Days</div>
      </div>
      <div className="time">
        <div className="value">{time.hours}</div>
        <div className="unit">Hours</div>
      </div>
      <div className="time">
        <div className="value">{time.minutes}</div>
        <div className="unit">Minutes</div>
      </div>
      <div className="time">
        <div className="value">{time.seconds}</div>
        <div className="unit">Seconds</div>
      </div>
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: fit-content;
  max-width: 500px;
  width: 100%;

  .time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 200;
    .value {
      font-size: 50px;
    }
    .unit {
      font-size: 16px;
    }
  }
`;

export default CountdownTimer;
