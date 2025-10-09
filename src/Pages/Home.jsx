import React from 'react';
import Container from '../Components/Container';
import Banner from '../Components/Banner';
import StateCard from '../Components/StateCard';
import AppCard from '../Components/AppCard';

const Home = () => {
  return (
    <main>
      <AppCard></AppCard>
      <Banner></Banner>
      <StateCard></StateCard>
    </main>
  );
};

export default Home;