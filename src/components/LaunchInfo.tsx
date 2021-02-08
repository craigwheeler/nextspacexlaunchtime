import React from 'react';
import styled from 'styled-components';

const LaunchInfo = ({ launch }: any) => {
  return (
    <Container>
      <h3 className="title">Scheduled Launch</h3>
      <div className="info scheduled-launch">
        <p className="date">Wednesday, February 3, 2021</p>
        <p className="time">5:35:00 PM</p>
        <p className="location">Vandenberg Air Force Base</p>
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

  .scheduled-launch {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  .title {
    font-size: 14px;
  }
  .info {
    font-weight: 200;
    font-size: 12px;
  }
`;

export default LaunchInfo;
