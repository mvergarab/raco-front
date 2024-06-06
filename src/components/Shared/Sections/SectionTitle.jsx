import React from 'react';

const SectionTitle = ({ title, isLeftAligned }) => (
  <div className={`section-title-container ${isLeftAligned ? 'left' : 'right'}`}>
    <h1>{title}</h1>
  </div>
);

export default SectionTitle;
