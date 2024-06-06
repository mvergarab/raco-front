import React from 'react';
import HeroSection from './HeroSection';
import OurServices from './OurServices';
import Footer from '../Shared/Footer';
import Colaborators from './Colaborators';
import Clients from './Clients';
import Gallery from './Gallery';
import KnowUs from './KnowUs';
import texture from '../../images/textures/raco_logos_complete.png';

const HomeView = () => {
  const bgStyle = { 
    backgroundImage: `url(${texture})`
  };

  return (
    <>
      <HeroSection />
      <div style={bgStyle}>
        <OurServices />
        <Gallery />
      </div>
      <KnowUs />
      <Clients />
      <Colaborators />
    </>
  );
};

export default HomeView;

