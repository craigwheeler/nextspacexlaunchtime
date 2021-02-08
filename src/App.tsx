import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Rocket from './components/Rocket';
import CountdownTimer from './components/CountdownTimer';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import gql from 'graphql-tag';
import LoadingSpinner from './components/LoadingSpinner';
import LaunchInfo from './components/LaunchInfo';

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
      setLaunch(response.data.launch);
    });
  }, []);

  return (
    <LayoutContainer>
      <Header />
      <Content>
        {launch.date_utc ? (
          <>
            <CountdownTimer date={launch.date_utc} />
            <View>
              <Rocket id={launch.rocket} />
              {/* TODO: transition launch details on about click */}
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
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 50px auto 40px;
  grid-template-areas:
    'header'
    'content'
    'footer';
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
  background-color: #131313;
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
