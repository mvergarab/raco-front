import React, { useState } from 'react';
import Form from '../Shared/Form';
import HeroSection from './HeroSection'


const SecondaryCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default SecondaryCard;