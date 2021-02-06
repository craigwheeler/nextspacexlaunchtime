import React from 'react';
import logo from '../assets/spacex-logo.svg';
import styled from 'styled-components';

const LaunchInfo = () => {
  return (
    <LaunchInfoContainer>
      <img src={logo} className="spacex-logo" alt="logo" />
    </LaunchInfoContainer>
  );
};

const LaunchInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .spacex-logo {
    height: 25px;
  }
`;

export default LaunchInfo;
