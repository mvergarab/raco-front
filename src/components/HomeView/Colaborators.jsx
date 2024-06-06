import React, { useState } from 'react';
import logo from '../../images/black_logo_versatile.png';
import redBull from '../../images/colaborators/electrolit.png'
import electrolit from '../../images/colaborators/red_bull.png'

const Colaborators = () => {
  return (
    <div className="colaborators-container">
      <div className="title-logos-container">
        <h2>COLABORADES</h2>
        <div className="colabs-cards">
          <img src={redBull} alt="Colaborator 1" className='colab'/>
          <img src={electrolit} alt="Colaborator 1" className='colab'/>         
        </div>
      </div>
    </div>
  );
};

export default Colaborators;