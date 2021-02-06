import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Rocket from './components/Rocket';
import LaunchInfo from './components/LaunchInfo';

const App = () => {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <Rocket />
        <LaunchInfo />
      </Content>
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.section`
  display: grid;
  grid-template-rows: 50px auto 67px;
  grid-template-areas:
    'header'
    'content'
    'footer';
  background-color: #000;
  color: #fff;
  height: 100vh;
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  justify-content: center;
`;

export default App;
