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
    }
  }
`;

const App = () => {
  const [launch, setLaunch] = useState({
    rocket: '',
    date_utc: ''
  });

  useEffect(() => {
    client.query({ query }).then((response) => {
      setLaunch(response.data.launch);
    });
  }, []);

  if (!launch.date_utc) return <div>loading spinner...</div>;

  return (
    <LayoutContainer>
      <Header />
      <Content>
        <CountdownTimer date={launch.date_utc} />
        <Rocket id={launch.rocket} />
      </Content>
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 40px auto 67px;
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
  justify-content: space-around;
  align-items: center;
`;

export default App;
