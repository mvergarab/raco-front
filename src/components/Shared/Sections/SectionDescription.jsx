import React from 'react';

const SectionDescription = ({ photo, descriptionPoints, isLeftAligned }) => (
  <div className="section-description-container">
    {isLeftAligned ? (
      <>
        <div className="description-container-left">
          {descriptionPoints.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>
        <img src={photo} alt="Description" className="section-photo-right" />
      </>
    ) : (
      <>
        <img src={photo} alt="Description" className="section-photo-left" />
        <div className="description-container">
          {descriptionPoints.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>
      </>
    )}
  </div>
);

export default SectionDescription;
