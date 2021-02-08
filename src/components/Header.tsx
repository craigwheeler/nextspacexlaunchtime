import React from 'react';
import logo from '../assets/spacex-logo.svg';
import styled from 'styled-components';

const HeaderComponent = () => {
  return (
    <Header>
      <img src={logo} className="spacex-logo" alt="logo" />
      <span className="caption">/ Next SpaceX Launch Time</span>
    </Header>
  );
};

const Header = styled.header`
  grid-area: header;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: left;
  color: #fff;
  padding-left: 25px;

  .spacex-logo {
    pointer-events: none;
    height: 20px;
    margin: 25px 0;
    pointer-events: none;
  }
  .caption {
    position: relative;
    left: -10px;
    top: 4px;
    font-size: 12px;
    color: #adadad;
    pointer-events: none;
    letter-spacing: 0.5px;
  }
`;

export default HeaderComponent;
