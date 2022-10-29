import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Rocket from './components/Rocket';
import CountdownTimer from './components/CountdownTimer';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import gql from 'graphql-tag';
import LoadingSpinner from './components/LoadingSpinner';

const restLink = new RestLink({ uri: 'https://api.spacexdata.com/v4/' });

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
});

const query = gql`
  query {
    launch @rest(type: "Launches", path: "launches/next") {
      rocket
      date_utc
      name
      flight_number
    }
  }
`;

const App = () => {
  const [launch, setLaunch] = useState({
    rocket: '',
    date_utc: '',
    name: '',
    flight_number: ''
  });

  useEffect(() => {
    client.query({ query }).then((response) => {
      const { launch } = response.data;
      if (new Date(launch) < new Date()) {
        setLaunch(launch);
      } else {
        setLaunch({
          date_utc: '',
          rocket: '',
          name: '',
          flight_number: ': TBA'
        });
      }
    });
  }, []);

  return (
    <LayoutContainer>
      <Header />
      <Content>
        {launch.flight_number ? (
          <>
            {launch.rocket !== '' ? <CountdownTimer date={launch.date_utc} /> : 'No upcoming launches'}
            <View>
              <Rocket id={launch.rocket} />
              {/* <LaunchInfo launch={launch} /> */}
            </View>
            <MissionInfo>
              <p className="mission-name">{launch.name}</p>
              <p className="mission-flight">Flight Number {launch.flight_number}</p>
            </MissionInfo>
          </>
        ) : (
          <LoadingSpinner />
        )}
      </Content>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
  grid-template-areas:
    'header'
    'content';
  background-color: #000;
  color: #fff;
  height: 100%;
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: radial-gradient(56.04% 44.43% at 50% 100%, rgb(22, 22, 22) 0%, rgb(0, 0, 0) 100%);
  background-color: #000;
`;

const View = styled.div`
  display: flex;
`;

const MissionInfo = styled.div`
  text-align: center;
  color: #999;

  .mission-name {
    font-size: 20px;
    margin: 5px;
  }
  .mission-flight {
    font-size: 12px;
    margin: 0;
  }
`;

export default App;
