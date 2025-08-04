import React from 'react';

const ExplanationSection = ({ explanation }) => {
  return (
    <div className="explanation-section">
      <div className="explanation-text">
        <p>{explanation}</p>
      </div>
    </div>
  );
};

export default ExplanationSection;