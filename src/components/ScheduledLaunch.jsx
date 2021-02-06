import React from 'react';
import styled from 'styled-components';
import missionPatch from '../assets/misson-patch.png';

const ScheduledLaunch = () => {
  return (
    <ScheduledLaunchContainer>
      <img src={missionPatch} className="patch" alt="mission patch" />
      <div className="schedule-info">
        <h2 className="schedule-title">Scheduled Launch</h2>
        <div>Wednesday, February 3, 2021</div>
        <div>5:35:00 PM</div>
        <div>Vandenberg Air Force Base</div>
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
  }

  .patch {
    width: 150px;
  }
`;

export default ScheduledLaunch;
