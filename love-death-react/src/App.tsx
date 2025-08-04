import React, { useEffect, useRef, useState } from 'react';
import './HorizontalScroll.css';

function App() {
  const [currentVideo, setCurrentVideo] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sections data
  const sections = [
    { id: 'intro', title: 'Love & Death' },
    { id: 'romeo-juliet', title: 'Romeo & Juliet' },
    { id: 'chava', title: 'Tevye & Chava' },
    { id: 'lust-caution', title: 'Lust, Caution' },
    { id: 'contemporary', title: 'Contemporary' },
    { id: 'future', title: 'Future' }
  ];

  // Handle video source based on screen size
  useEffect(() => {
    const updateVideoSource = () => {
      const isMobile = window.innerWidth <= 768;
      setCurrentVideo(isMobile ? '/video-phone.mp4' : '/video-laptop.mp4');
    };

    updateVideoSource();
    window.addEventListener('resize', updateVideoSource);
    return () => window.removeEventListener('resize', updateVideoSource);
  }, []);

  // Handle scroll-based section navigation with proper debouncing
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      // Prevent rapid scrolling - exit early if already scrolling
      if (isScrolling) return;
      
      // Set scrolling flag to prevent multiple triggers
      isScrolling = true;
      
      // Clear any existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Require minimum scroll threshold to prevent accidental triggers
      const threshold = 30;
      
      if (Math.abs(e.deltaY) > threshold) {
        if (e.deltaY > 0 && currentSection < sections.length - 1) {
          // Scroll down = next section
          setCurrentSection(prev => prev + 1);
        } else if (e.deltaY < 0 && currentSection > 0) {
          // Scroll up = previous section
          setCurrentSection(prev => prev - 1);
        }
      }
      
      // Reset scrolling flag after transition completes
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 900); // Slightly longer than CSS transition (800ms)
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent key navigation if already scrolling
      if (isScrolling) return;
      
      if (e.key === 'ArrowRight' && currentSection < sections.length - 1) {
        setCurrentSection(prev => prev + 1);
      } else if (e.key === 'ArrowLeft' && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [currentSection, sections.length]);

  // Update container transform
  useEffect(() => {
    if (containerRef.current) {
      const translateX = -currentSection * 100;
      containerRef.current.style.transform = `translateX(${translateX}vw)`;
    }
  }, [currentSection]);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
  };

  return (
    <div className="horizontal-scroll-wrapper">
      {/* Sticky Title */}
      <div className="sticky-title">
        {sections[currentSection]?.title}
      </div>

      {/* Progress Indicator */}
      <div className="scroll-progress">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${index === currentSection ? 'active' : ''}`}
            onClick={() => goToSection(index)}
          />
        ))}
      </div>

      {/* Horizontal Container */}
      <div className="horizontal-scroll-container" ref={containerRef}>
        
        {/* Intro Section */}
        <section className="story-section intro-section" id="intro">
          <div className="section-content">
            <h1 className="section-title">Love & Death</h1>
            <p className="section-subtitle">
              A cinematic journey through timeless stories of passion, sacrifice, and the human condition
            </p>
            
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <video
                ref={videoRef}
                className="intro-video"
                src={currentVideo}
                muted
                loop
                playsInline
              />
              {!isPlaying && (
                <button className="play-button" onClick={handlePlayVideo}>
                  <svg className="play-icon" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              )}
            </div>
            
            <p className="explanation-text">
              Scroll horizontally to explore five distinct narratives that examine love complexity 
              across different eras and cultures.
            </p>
          </div>
        </section>

        {/* Romeo & Juliet Section */}
        <section className="story-section romeo-juliet" id="romeo-juliet">
          <div className="section-content">
            <h2 className="section-title">Romeo & Juliet</h2>
            <p className="section-subtitle">Shakespeare Timeless Tragedy</p>
            
            <blockquote className="quote-text">
              "But soft, what light through yonder window breaks? It is the east, and Juliet is the sun."
            </blockquote>
            
            <iframe
              id="romeo-iframe"
              className="interactive-iframe"
              src="https://www.youtube.com/embed/eVK_LLxScd8"
              title="Romeo and Juliet"
              allowFullScreen
            />
            
            <p className="explanation-text">
              Shakespeare Romeo and Juliet remains the archetypal story of star-crossed lovers. 
              Their passion burns bright but brief, consumed by family hatred and societal constraints.
            </p>
          </div>
        </section>

        {/* Tevye & Chava Section */}
        <section className="story-section chava" id="chava">
          <div className="section-content">
            <h2 className="section-title">Tevye & Chava</h2>
            <p className="section-subtitle">Tradition vs. Love in Fiddler on the Roof</p>
            
            <blockquote className="quote-text">
              "If I try to bend that far, I will break."
            </blockquote>
            
            <iframe
              id="chava-iframe"
              className="interactive-iframe"
              src="https://www.youtube.com/embed/gRdfX7ut8gw"
              title="Fiddler on the Roof - Tevye and Chava"
              allowFullScreen
            />
            
            <p className="explanation-text">
              In Anatevka, Tevye faces the ultimate test when his daughter Chava chooses love over tradition, 
              marrying outside their faith and forcing him to choose between his beliefs and his child.
            </p>
          </div>
        </section>

        {/* Lust, Caution Section */}
        <section className="story-section lust-caution" id="lust-caution">
          <div className="section-content">
            <h2 className="section-title">Lust, Caution</h2>
            <p className="section-subtitle">Ang Lee Dangerous Liaisons</p>
            
            <blockquote className="quote-text">
              "Love is like a game of chess. One move can change everything."
            </blockquote>
            
            <iframe
              id="lust-caution-iframe"
              className="interactive-iframe"
              src="https://www.youtube.com/embed/0VMEH6aWUcg"
              title="Lust, Caution"
              allowFullScreen
            />
            
            <p className="explanation-text">
              Set in WWII Shanghai, this tale explores the dangerous intersection of espionage and desire, 
              where a young woman mission to seduce a collaborator becomes a game of emotional survival.
            </p>
          </div>
        </section>

        {/* Contemporary Section */}
        <section className="story-section contemporary" id="contemporary">
          <div className="section-content">
            <h2 className="section-title">Contemporary</h2>
            <p className="section-subtitle">Modern Love Stories</p>
            
            <blockquote className="quote-text">
              "In the digital age, we swipe right for love and left for everything else."
            </blockquote>
            
            <iframe
              id="contemporary-iframe"
              className="interactive-iframe"
              src="https://www.youtube.com/embed/2V2sfqJlFl8"
              title="Modern Love Stories"
              allowFullScreen
            />
            
            <p className="explanation-text">
              Today love stories unfold across screens and apps, where connection happens instantly 
              but depth requires time, and where vulnerability fights against the fear of digital permanence.
            </p>
          </div>
        </section>

        {/* Future Section */}
        <section className="story-section future" id="future">
          <div className="section-content">
            <h2 className="section-title">Future</h2>
            <p className="section-subtitle">Love in Tomorrow World</p>
            
            <blockquote className="quote-text">
              "Even in a world of artificial hearts, love remains beautifully human."
            </blockquote>
            
            <iframe
              id="future-iframe"
              className="interactive-iframe"
              src="https://www.youtube.com/embed/KdrZ4OLrUtg"
              title="Future Love Stories"
              allowFullScreen
            />
            
            <p className="explanation-text">
              As we venture into an age of AI and virtual reality, what will love become? 
              Will human connection transcend technology, or will we redefine intimacy itself?
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;
