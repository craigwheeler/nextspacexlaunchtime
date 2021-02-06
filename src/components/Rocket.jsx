import React from 'react';
import styled from 'styled-components';
import falcon9 from '../assets/falcon-9.png';
import falconHeavy from '../assets/falcon-heavy.png';
import starShip from '../assets/starship.png';

const Rocket = ({ id }) => {
  switch (id) {
    case '5e9d0d95eda69973a809d1ec':
      return (
        <RocketContainer>
          <img src={falcon9} className="rocket" alt="rocket" />
        </RocketContainer>
      );
    case '5e9d0d95eda69974db09d1ed':
      return (
        <RocketContainer>
          <img src={falconHeavy} className="rocket" alt="rocket" />
        </RocketContainer>
      );
    default:
      return (
        <RocketContainer>
          <img src={starShip} className="rocket" alt="rocket" />
        </RocketContainer>
      );
  }
};

const RocketContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .rocket {
    max-height: 600px;
  }
`;

export default Rocket;
