import React from 'react';
import styled from 'styled-components';
import CountdownTimer from './CountdownTimer';
import ScheduledLaunch from './ScheduledLaunch';

const LaunchInfo = () => {
  return (
    <LaunchInfoContainer>
      <CountdownTimer />
      <ScheduledLaunch />

      <div className="launch-details">
        <h2>Falcon Heavy</h2>
        <p>
          With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner
          loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next
          closest operational vehicle, the Delta IV Heavy, at one-third the cost.
        </p>
        <h2>Starlink-18 (v1.0)</h2>
        <p>
          This mission launches the eighteenth batch of operational Starlink satellites, which are version 1.0, from
          SLC-40. It is the nineteenth Starlink launch overall. The satellites will be delivered to low Earth orbit and
          will spend a few weeks maneuvering to their operational altitude. The booster is expected to land on an ASDS.
        </p>
      </div>
    </LaunchInfoContainer>
  );
};

const LaunchInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  .timer {
    width: 400px;
  }

  .launch-details {
    max-width: 500px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);

    p {
      line-height: 22px;
      font-weight: 300;
      font-size: 14px;
    }
  }
`;

export default LaunchInfo;
