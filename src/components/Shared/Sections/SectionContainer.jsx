import React from 'react';

const SectionContainer = ({ children, style }) => (
  <div className="section-container" style={style}>
    {children}
  </div>
);

export default SectionContainer;
