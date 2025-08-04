import React from 'react';

const QuoteSection = ({ quote }) => {
  return (
    <div className="quote-section" id={quote.id}>
      <p>
        <b>
          <i>{quote.text}</i>
        </b>
      </p>
    </div>
  );
};

export default QuoteSection;