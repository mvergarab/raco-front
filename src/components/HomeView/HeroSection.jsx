import React from 'react';
import logoImage from '../../images/logo_hero.png';
import running from '../../images/static/rollers.jpg';

const HeroSection = () => {
  return (
    <div className="home-hero-container">
      <div className="hero-copy">
          <h1>TU PARTNER ESTRATÉGICO CON EL DESARROLLO DEPORTIVO</h1> 
      </div>
      <div className='hero-images-container'>
        <img src={running} alt="hero-image" id="hero-image"/>
        <img src={logoImage} alt="Logo" id="hero-logo"/>
        <img></img>
      </div>
    </div>
  );
};

export default HeroSection;

