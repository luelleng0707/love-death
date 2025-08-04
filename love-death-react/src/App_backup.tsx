import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // IntersectionObserver for smooth transition
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    // Observe all explanation sections
    const hiddenElements = document.querySelectorAll('.explanation-section');
    hiddenElements.forEach((el) => observer.observe(el));

    // Function to change video source based on screen size
    const changeVideoSource = () => {
      const video = document.getElementById('intro-video') as HTMLVideoElement;
      const videoSource = document.getElementById('video-source') as HTMLSourceElement;
      
      if (video && videoSource) {
        if (window.innerWidth > 500) {
          videoSource.src = 'video-laptop.mp4';
        } else {
          videoSource.src = 'video-phone.mp4';
        }
        video.load();
      }
    };

    // Set initial video source
    changeVideoSource();

    // Add resize listener
    window.addEventListener('resize', changeVideoSource);

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('resize', changeVideoSource);
    };
  }, []);

  const handlePlayClick = () => {
    const video = document.getElementById('intro-video') as HTMLVideoElement;
    const button = document.getElementById('play-button') as HTMLButtonElement;
    
    if (video && button) {
      video.play();
      video.muted = false;
      button.style.display = 'none';
    }
  };

  return (
    <div className="App">
      <div className="sticky-title">WHERE DOES LOVE STAND NOW</div>
      <h3 className="subheading">Besides the changing norms, in contrast to old romance to the present?</h3>
      
      <div className="video">
        <video id="intro-video" muted>
          <source id="video-source" src="video-phone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button id="play-button" onClick={handlePlayClick}>
          <img src="icon.svg" alt="Play Icon" className="play-icon" />
        </button>
      </div>
      
      <p style={{margin: 'auto', width: '90%', position: 'relative', bottom: '20px'}}>
        The video above represents two couples that share how they met, this captures the evolving nature of love and its place 
        in changing societal norms, offering a compelling contrast to the depictions in <b>Romeo and Juliet, Chava,</b> and <b>Lust, caution</b>.
        The video highlights how love has transitioned from being shaped by external pressures to becoming a deeply personal, authentic connection,
        reflecting both individual freedom and evolving values. 
        In a world where love adapts, are we closer to true freedom in relationships, or have new norms simply replaced the old ones?
      </p>

      {/* Romeo and Juliet Section */}
      <section className="romeo-juliet">
        <div className="title-section">
          <h1>ROMEO AND JULIET</h1>
          <div className="subtitle">
            In <b>Romeo and Juliet,</b> love is a powerful, all-consuming force that defies societal constraints but ends in tragedy, 
            while modern relationships now as seen on the video, often thrive on mutual growth and fewer external barriers.
          </div>
        </div>
        
        <div className="quote-section" id="rj-1">
          <p>
            <b>
              <i>"Did my heart love till now? Forswear it, sight! 
              <br />For I ne'er saw true beauty till this night."</i> 
              <br />(Act 1, Scene 5)
            </b>
          </p>
        </div>
        
        <div className="explanation-section">
          <div className="explanation-text">
            <p>This reflects the intensity and immediacy of traditional romantic love. 
                <br />In contrast, modern love often emphasizes compatibility, communication, and gradual connection over instantaneous attraction.</p>
          </div>
        </div>
        
        <div className="quote-section" id="rj-2">
          <p>
            <b>
              <i>"These violent delights have violent ends 
              <br /> And in their triumph die, 
              <br /> like fire and powder, 
              <br />Which, as they kiss, consume."</i>
              <br /> (Act 2, Scene 6)
            </b>
          </p>
        </div>
        
        <div className="explanation-section">
          <div className="explanation-text">
            <p>Friar Laurence warns against the intensity of impulsive love, highlighting its potential for destruction. 
                <br />This resonates with the modern caution about "burnout" in relationships, as contemporary norms emphasize balance and emotional health.</p>
          </div>
        </div>
        
        <div className="quote-section" id="rj-3">
          <p>
            <b>
              <i>"A plague o' both your houses! 
              <br /> They have made worms' meat of me."
              </i><br /> (Act 3, Scene 1)
            </b>
          </p>
        </div>
        
        <div className="explanation-section">
          <div className="explanation-text">
            <p>Mercutio's curse on the feuding families underscores how societal norms and external conflicts can affect relationships. 
                <br />While societal expectations shaped traditional romances heavily, modern love often challenges or redefines these norms.</p>
          </div>
        </div>
        
        <div className="iframe-container">
          <iframe 
            id="romeo-iframe" 
            loading="eager" 
            src="https://embed.pickaxeproject.com/axe?id=Romeo_LP5II&mode=embed_gold&host=beta&theme=custom&opacity=100&font_header=Real+Head+Pro&size_header=32&font_body=Real+Head+Pro&size_body=20&font_labels=Real+Head+Pro&size_labels=32&font_button=Real+Head+Pro&size_button=16&c_fb=9B111E&c_ff=030303&c_fbd=FFFFFF&c_rb=00234&c_bb=FFFFFF&c_bt=F7F7F7&c_t=FFFFFF&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=outline&s_t=1&s_to=0&s_r=0&description=hide" 
            width="80%" 
            height="500px" 
            style={{border: '0px solid rgba(0, 0, 0, 1)', transition: '.3s', borderRadius: '4px', maxWidth: '700px'}}
            frameBorder="0"
          />
        </div>
      </section>

      {/* Chava Section */}
      <section className="chava">
        <div className="title-section">
          <h1>Tevye the Dairyman</h1>
          <div className="subtitle">
            <br /><br /> <b>Chava's</b> story explores the tension between love and tradition, where cultural boundaries are a source of conflict, 
            whereas today's couples frequently celebrate diversity and acceptance in their relationships.
          </div>
        </div>
        
        <div className="quote-section" id="chava-1">
          <p>
            <b>
              <i>Indeed, you are your child's father,
              <br />but you are blind to what she is doing.
              <br />She is moving into another world,
              <br />and you do not understand her, 
              <br />or you don't want to understand her.</i> 
            </b>
          </p>
        </div>
        
        <div className="explanation-section">
          <div className="explanation-text">
            <p>This quote highlights the father's blindness to his daughter's actions, symbolizing a generational gap and lack of understanding. 
                <br />In a modern context, it reflects how parents often struggle to understand their children's evolving identities or desires, sometimes choosing ignorance or control over connection. It speaks to the tension between desire for independence and parental control in today's world.</p>
          </div>
        </div>
        
        <div className="quote-section" id="chava-2">
          <p>
            <b>
              <i>'Amazing!' she said 
              <br />"You've quotation for everything! 
              <br />Maybe you can find one about how people 
              <br />separated themselves into Jews 
              <br />and Gentiles, into masters and slaves, 
              <br />into landlords and beggars?"</i> 
            </b>
          </p>
        </div>
        
        <div className="explanation-section">
          <div className="explanation-text">
            <p>
              This quote reflects the shift in how love is viewed over time. Chava challenges love vs tradition through her relationship with Fyedka, showing how love begins to defy societal boundaries. 
              <br /> In comparison to modern love, it mirrors how many contemporary relationships push against societal norms and expectations, defying boundaries like race, religion, or class to embrace a more inclusive, personal definition of love.
            </p>
          </div>
        </div>
        
        <div className="iframe-container">
          <iframe 
            id="chava-iframe" 
            loading="eager" 
            src="https://embed.pickaxeproject.com/axe?id=Tevye_Y051F&mode=embed_gold&host=beta&theme=custom&opacity=100&font_header=Real+Head+Pro&size_header=32&font_body=Real+Head+Pro&size_body=20&font_labels=Real+Head+Pro&size_labels=32&font_button=Real+Head+Pro&size_button=16&c_fb=2B8DA6&c_ff=030303&c_fbd=FFFFFF&c_rb=00234&c_bb=FFFFFF&c_bt=F7F7F7&c_t=FFFFFF&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=outline&s_t=1&s_to=0&s_r=0&description=hide" 
            width="80%" 
            height="500px" 
            style={{border: '0px solid rgba(0, 0, 0, 1)', transition: '.3s', borderRadius: '4px', maxWidth: '700px'}}
            frameBorder="0"
          />
        </div>
      </section>

      {/* Lust, Caution Section */}
      <section className="lust-caution">
        <div className="title-section">
          <h1>LUST, CAUTION</h1>
          <div className="subtitle">
            <br /> Similarly, <b>Lust, Caution</b> reveals love shaped by secrecy and power dynamics, contrasting with the openness and equality many modern couples value.
          </div>
        </div>
        
        <div className="quote-section" id="lc-1">
          <p>
            <b>
              <i>The two occasions she had been with Yee, 
              <br /> she had been so tense, so taken up in 
              <br />saying her lines that there had been no 
              <br />opportunity to ask herself how she actually felt.</i>
            </b>
          </p>
        </div>
        
        <div className="explanation-section">
          <div className="explanation-text">
            <p>
              Chia-Chih has never really stopped in her relationship with Mr. Yee to consider her actual feelings towards what was going on, preoccupied with getting the job done. 
              <br />In a modern context, individuals are encouraged to be aware of their own feelings and communicate them freely, rather than being caught up in a role or societal expectations.
            </p>
          </div>
        </div>
        
        <div className="quote-section" id="lc-2">
          <p>
            <b>
              <i>
                "He really loves me, she thought.
                <br />Inside, she felt a raw tremor of shock
                <br />then a vague sense of loss."
                <br />"She must have hated him at the end. 
                <br />But real men have to be ruthless. 
                <br />She wouldn't have loved him 
                <br />if he'd been the sentimental type."                           
              </i>
            </b>
          </p>
        </div>
        
        <div className="explanation-section">
          <div className="explanation-text">
            <p>Chia-Chih's complex feelings reveal a mix of shock, loss, and an acceptance of the harshness in love, 
                where she justifies cruelty as part of the relationship's
                intensity and her inability to love someone more tender. 
                This sentiment reflects a power imbalance, where love is intertwined with emotional manipulation and control, 
                rather than a partnership based on equality and mutual respect. The contrast with modern love is stark: today's 
                relationships are more likely to value emotional vulnerability, equality, and sentimentality, rather than viewing power struggles 
                or ruthlessness as part of love's definition.
            </p>
          </div>
        </div>
        
        <div className="iframe-container">
          <iframe 
            id="lust-caution-iframe" 
            loading="eager" 
            src="https://embed.pickaxeproject.com/axe?id=Wong_Cha_Chi_SKDF0&mode=embed_gold&host=beta&theme=custom&opacity=100&font_header=Real+Head+Pro&size_header=32&font_body=Real+Head+Pro&size_body=20&font_labels=Real+Head+Pro&size_labels=32&font_button=Real+Head+Pro&size_button=16&c_fb=164E4E&c_ff=030303&c_fbd=FFFFFF&c_rb=00234&c_bb=FFFFFF&c_bt=F7F7F7&c_t=FFFFFF&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=outline&s_t=1&s_to=0&s_r=0&description=hide" 
            width="80%" 
            height="500px" 
            style={{border: '0px solid rgba(0, 0, 0, 1)', transition: '.3s', borderRadius: '4px', maxWidth: '700px'}}
            frameBorder="0"
          />
        </div>
      </section>

      {/* Contemporary Section */}
      <section className="contemporary">
        <div className="title-section">
          <h1>Now</h1>
          <div className="subtitle">
            In this century, love has shifted from simply an obligation to either have children, rise in social standing, or fulfill a deal with parents, to a more commonly convoluted phenomenon.
          </div>
        </div>
        
        <div className="quote-section" id="contemporary-1">
          <p>
            <b>
              <i>
                "Are we datin'? 
                <br />Are we f***in'? 
                <br />Are we best friends? 
                <br />Are we somethin' in between that?" 
                <br />(Heartbeat, Childish Gambino)                       
              </i>
            </b>
          </p>
        </div>
        
        <div className="explanation-section">
          <div className="explanation-text">
            <p>
              We can see that the lyrics of the song demonstrate a "love" where the lines are blurred. 
              It's not clear to the speaker how the other person feels about them, and vice versa. 
              Like how Chia-Chih also doesn't quite understand the relationship she has with 
              Mr. Yee. In modern times, love has shifted from an obligation to a choice. 
              People can choose a lot more often, and it leads to more complex feelings than what was the 
              norm in the past.
            </p>
          </div>
        </div>
        
        <div className="quote-section" id="contemporary-2">
          <p>
            <b>
              <i>
                "I can't see anything I don't like about you." 
                <br />"But you will! You will think of things. 
                <br />And I'll get bored with you and feel trapped, 
                <br />because that's what happens with me." 
                <br />(Eternal Sunshine of the Spotless Mind)                    
              </i>
            </b>
          </p>
        </div>
        
        <div className="explanation-section">
          <div className="explanation-text">
            <p>
              This exchange captures modern fears about long-term commitment, where initial excitement can give way to doubts and dissatisfaction. Unlike traditional, all-consuming love, modern relationships often face challenges like emotional independence and the pressure to maintain connection over time. This shift reflects the complexities of love today, where freedom and self-awareness play a larger role.
            </p>
          </div>
        </div>
        
        <div className="iframe-container">
          <iframe 
            id="contemporary-iframe" 
            loading="eager" 
            src="https://embed.pickaxeproject.com/axe?id=Love_K79Z0&mode=embed_gold&host=beta&theme=custom&opacity=100&font_header=Real+Head+Pro&size_header=32&font_body=Real+Head+Pro&size_body=20&font_labels=Real+Head+Pro&size_labels=32&font_button=Real+Head+Pro&size_button=16&c_fb=9A7A63&c_ff=030303&c_fbd=FFFFFF&c_rb=00234&c_bb=FFFFFF&c_bt=F7F7F7&c_t=FFFFFF&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=outline&s_t=1&s_to=0&s_r=0&description=hide" 
            width="80%" 
            height="500px" 
            style={{border: '0px solid rgba(0, 0, 0, 1)', transition: '.3s', borderRadius: '4px', maxWidth: '700px'}}
            frameBorder="0"
          />
        </div>
      </section>

      {/* Future Section */}
      <section className="future">
        <div className="title-section">
          <h1>Tarot</h1>
          <div className="subtitle">
            As we reflect on love's ever-changing nature, we look to the future.
          </div>
        </div>
        
        <div className="quote-section" id="future-1">
          <p style={{width: '80%'}}>
            <b>
              <i>
                What will love look like in the coming years?
                <br /> Will it continue to evolve with technological 
                <br />advancements and new societal norms? 
                <br />Will love be more self-determined, 
                <br />or will it be guided by even more complex structures?    
              </i>
            </b>                
          </p>
        </div>
        
        <div className="explanation-section">
          <div className="explanation-text">
            <p>
              Here, we invite you to explore the future of love through a tarot reading. 
              <br />Step up to the stand and ask: 
              <br />
              <b> 
                What will my love life be like?
              </b>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
