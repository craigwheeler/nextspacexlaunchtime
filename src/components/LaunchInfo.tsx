import React from 'react';
import styled from 'styled-components';

const LaunchInfo = ({ launch }: any) => {
  return (
    <Container>
      <h1 className="title">Next Launch Time</h1>
      <div className="info scheduled-launch">
        <p>
          <span className="date">Wednesday, February 3, 2021</span>
          <span className="time">5:35:00 PM</span>
        </p>
        <p>
          <span className="location">Vandenberg Air Force Base</span>
        </p>
      </div>

      <h3 className="title">{launch.name}</h3>
      <div className="info">
        <p>
          This mission launches the sixteenth batch of operational Starlink satellites, which are version 1.0, from
          LC-39A. It is the eighteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and
          will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.
        </p>
      </div>

      <h3 className="title">Falcon 9</h3>
      <div className="info">
        <p>
          Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of
          satellites and the Dragon spacecraft into orbit.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 25px;
  max-width: 200px;

  .title {
    font-size: 14px;
  }
  .info {
    font-weight: 200;
    font-size: 12px;
  }
  .scheduled-launch {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

export default LaunchInfo;
