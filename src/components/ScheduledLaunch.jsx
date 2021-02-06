import React from 'react';
import styled from 'styled-components';
import missionPatch from '../assets/misson-patch.png';

const ScheduledLaunch = () => {
  return (
    <ScheduledLaunchContainer>
      <img src={missionPatch} className="patch" alt="mission patch" />
      <div className="schedule-info">
        <h2 className="schedule-title">Next Scheduled Launch</h2>
        <div className="date">Wednesday, February 3, 2021</div>
        <div>5:35:00 PM</div>
        <div className="location">Vandenberg Air Force Base</div>
      </div>
    </ScheduledLaunchContainer>
  );
};

const ScheduledLaunchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0;
  width: 100%;

  .schedule-info {
    margin-left: 25px;
    .schedule-title {
      margin-top: 0;
    }
    .date {
      margin: 5px 0;
    }
    .location {
      margin-top: 10px;
    }
  }

  .patch {
    width: 125px;
  }
`;

export default ScheduledLaunch;
