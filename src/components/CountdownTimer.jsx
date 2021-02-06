import React from 'react';
import styled from 'styled-components';
import timer from '../assets/countdown-timer.svg';

const CountdownTimer = () => {
  return (
    <TimerContainer>
      <img src={timer} className="timer" alt="countdown timer" />
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;

  .timer {
    width: 400px;
  }
`;

export default CountdownTimer;
