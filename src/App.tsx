import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Rocket from './components/Rocket';
import LaunchInfo from './components/LaunchInfo';

const App = () => {
  const rocketId = '5e9d0d95eda69974db09d1ed';
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <Rocket id={rocketId} />
        <LaunchInfo />
      </Content>
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 40px auto 67px;
  grid-template-areas:
    'header'
    'content'
    'footer';
  background-color: #000;
  color: #fff;
  height: 100%;
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  justify-content: center;
`;

export default App;
