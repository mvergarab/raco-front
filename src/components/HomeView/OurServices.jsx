import React from 'react';
import federation from '../../images/brands/raco_federation.png';
import mkt from '../../images/brands/raco_mkt.png';
import events from '../../images/brands/raco_events.png';
import consulting from '../../images/brands/raco_consulting.png';
import athletes from '../../images/brands/raco_athletes.png';
import global from '../../images/brands/raco_global.png';
import { downArrow } from '../../utils/icons';
import texture from '../../images/textures/texture_black.png';

const OurServices = () => {
  const bgStyle = { 
    backgroundImage: `url(${texture})`,
    backgroundSize: '1450px ',
  };

  return (
    <div className="services-container" style={bgStyle}>
      <div className="title-services-container">
        <h1 className="section-title">Nuestros Servicios</h1>  
        {downArrow}
      </div>
      <div className="services-logo-container">
        <div className='logo-container'>
         <img src={federation} alt="Federation Logo" className="service-logo rotate-logo" />
        </div>
        <div className='logo-container'>  
         <img src={mkt} alt="MKT Logo" className="service-logo rotate-logo" />
        </div>
        <div className='logo-container'>
          <img src={events} alt="Events Logo" className="service-logo rotate-logo" />
        </div>
        <div className='logo-container'>
          <img src={athletes} alt="Athletes Logo" className="service-logo rotate-logo" />
        </div>
        <div className='logo-container'>
          <img src={consulting} alt="Consulting Logo" className="service-logo rotate-logo" />
        </div>
        <div className='logo-container'> 
          <img src={global} alt="Global Logo" className="service-logo rotate-logo" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
