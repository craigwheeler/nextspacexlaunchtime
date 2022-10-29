import React from 'react';
import styled from 'styled-components';
import falcon9 from '../assets/falcon-9.png';
import falconHeavy from '../assets/falcon-heavy.png';
import starShip from '../assets/starship.png';

const Rocket = ({ id }) => {
  switch (id) {
    case '5e9d0d96eda699382d09d1ee':
      return <RocketImage src={starShip} className="rocket" alt="rocket" />;
    case '5e9d0d95eda69974db09d1ed':
      return <RocketImage src={falconHeavy} className="rocket" alt="rocket" />;
    default:
      return <RocketImage src={falcon9} className="rocket" alt="rocket" />;
  }
};

const RocketImage = styled.img`
  max-height: 60vh;
`;

export default Rocket;
