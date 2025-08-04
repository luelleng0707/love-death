import React, { useEffect } from 'react';

const StorySection = ({ data }) => {
  useEffect(() => {
    // Update background images for quote sections
    const updateBackgroundImages = () => {
      const quoteSections = document.querySelectorAll('.quote-section');
      
      quoteSections.forEach((quoteSection) => {
        const section = quoteSection.closest('section');
        if (!section) return;
        
        const sectionClass = section.classList[0];
        const quoteId = quoteSection.id;
        
        let backgroundImage = '';
        
        if (window.innerWidth > 768) {
          // Desktop backgrounds
          if (sectionClass === 'romeo-juliet') {
            backgroundImage = `url('rj-scene${quoteId}.jpg')`;
          } else if (sectionClass === 'chava') {
            backgroundImage = `url('c-scene${quoteId}.jpg')`;
          } else if (sectionClass === 'lust-caution') {
            backgroundImage = `url('lc-scene${quoteId}.png')`;
          } else if (sectionClass === 'contemporary') {
            backgroundImage = `url('co-scene${quoteId}.jpg')`;
          } else if (sectionClass === 'future') {
            backgroundImage = `url('f-scene${quoteId}.jpg')`;
          }
        } else {
          // Mobile backgrounds
          if (sectionClass === 'romeo-juliet') {
            backgroundImage = `url('rj-phone${quoteId}.jpg')`;
          } else if (sectionClass === 'chava') {
            backgroundImage = `url('c-phone${quoteId}.jpg')`;
          } else if (sectionClass === 'lust-caution') {
            backgroundImage = `url('lc-phone${quoteId}.png')`;
          } else if (sectionClass === 'contemporary') {
            backgroundImage = `url('co-phone${quoteId}.jpg')`;
          } else if (sectionClass === 'future') {
            backgroundImage = `url('f-phone${quoteId}.jpg')`;
          }
        }
        
        quoteSection.style.backgroundImage = backgroundImage;
      });
    };

    updateBackgroundImages();
    window.addEventListener('resize', updateBackgroundImages);

    return () => {
      window.removeEventListener('resize', updateBackgroundImages);
    };
  }, []);

  return (
    <section className={data.className}>
      <div className="title-section">
        <h1>{data.title}</h1>
        <div className="subtitle" dangerouslySetInnerHTML={{ __html: data.subtitle }}></div>
      </div>
      
      {data.quotes && data.quotes.map((quote) => (
        <React.Fragment key={quote.id}>
          <div className="quote-section" id={quote.id.toString()}>
            <p>
              <b>
                <i dangerouslySetInnerHTML={{ __html: quote.text.replace(/\n/g, '<br>') }} />
              </b>
            </p>
          </div>
          
          {quote.explanation && (
            <div className="explanation-section">
              <div className="explanation-text">
                <p dangerouslySetInnerHTML={{ __html: quote.explanation.replace(/\n/g, '<br>') }} />
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      
      {data.embedUrl && (
        <div className="iframe-container">
          <iframe
            loading="eager"
            src={data.embedUrl}
            width="80%"
            height="500px"
            style={{
              border: '0px solid rgba(0, 0, 0, 1)',
              transition: '.3s',
              borderRadius: '4px',
              maxWidth: '700px'
            }}
            frameBorder="0"
          />
        </div>
      )}
    </section>
  );
};

export default StorySection;
