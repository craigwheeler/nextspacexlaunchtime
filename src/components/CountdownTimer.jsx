import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // target date
  const targetDate = '2021-02-12T05:25:00.000Z';
  const countDownDate = new Date(targetDate).getTime();

  useEffect(() => {
    const interval = setInterval(function () {
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
  align-items: center;
  justify-content: left;
  position: relative;
  left: -40px;

  .time {
    width: 125px;
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 200;

    .value {
      font-size: 75px;
    }

    .unit {
      font-size: 16px;
    }
  }
`;

export default CountdownTimer;
