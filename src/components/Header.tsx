import React from 'react';
import logo from '../assets/spacex-logo.svg';
import styled from 'styled-components';

const HeaderComponent = () => {
  return (
    <Header>
      <img src={logo} className="spacex-logo" alt="logo" />
    </Header>
  );
};

const Header = styled.header`
  grid-area: header;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding-left: 10px;

  .spacex-logo {
    pointer-events: none;
    height: 20px;
    margin: 25px 0;
    pointer-events: none;
  }
  .container {
    position: relative;
    left: -10px;
    .caption,
    .separator {
      font-size: 12px;
      color: #adadad;
      pointer-events: none;
      font-weight: 400;
      display: inline-block;
    }
    .separator {
      margin-right: 5px;
    }
  }
`;

export default HeaderComponent;
