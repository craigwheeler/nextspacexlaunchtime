import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Rocket from './components/Rocket';
import CountdownTimer from './components/CountdownTimer';

const App = () => {
  const rocketId = '5e9d0d95eda69974db09d1ed';
  const launchDate = '2021-02-12T05:25:00.000Z';

  return (
    <LayoutContainer>
      <Header />
      <Content>
        <CountdownTimer date={launchDate} />
        <Rocket id={rocketId} />
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default App;
