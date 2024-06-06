import React, { useState } from 'react';
import Form from '../Shared/Form';
import HeroSection from './HeroSection'


const ColabsCard = ({ title, description }) => {
  return (
    <div className="client-colab-card">
      <h4>{title}</h4>
    </div>
  );
};

export default ColabsCard;
