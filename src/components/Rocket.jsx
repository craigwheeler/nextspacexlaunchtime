import React from 'react';
import logo from '../assets/spacex-logo.svg';
import styled from 'styled-components';

const Rocket = () => {
  return (
    <RocketContainer>
      <img src={logo} className="spacex-logo" alt="logo" />
    </RocketContainer>
  );
};

const RocketContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .spacex-logo {
    height: 25px;
  }
`;

export default Rocket;
