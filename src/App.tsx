import React from 'react';
import styled from 'styled-components';
import HeaderComponent from './components/Header';

const App = () => {
  return (
    <Styles>
      <HeaderComponent />
    </Styles>
  );
};

const Styles = styled.div`
  background-color: #222;
  min-height: 100vh;
`;

export default App;
