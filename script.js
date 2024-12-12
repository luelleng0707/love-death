// JavaScript to trigger video play and content display
document.getElementById('play-button').addEventListener('click', function() {
    var video = document.getElementById('intro-video');
    video.play(); // Play the video
    video.muted = false; // Unmute the video
    this.style.display = 'none'; // Hide the play button
});

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

window.onload = function() {
    const quoteSections = document.querySelectorAll('.quote-section');

    // Function to update background images based on screen width
    function updateBackgroundImages() {
        quoteSections.forEach((quoteSection, index) => {
            const sectionClass = quoteSection.closest('section').classList[0]; // Get the parent section class (e.g., romeo-juliet, chava, lust-caution)

            let backgroundImage = '';

            // Loop to apply background images based on section and quote id
            for (let i = 1; i <= 5; i++) {
                if (window.innerWidth > 768) {  // Desktop backgrounds
                    if (sectionClass === 'romeo-juliet' && quoteSection.id == i) {
                        backgroundImage = `url('rj-scene${i}.jpg')`;
                    } else if (sectionClass === 'chava' && quoteSection.id == i) {
                        backgroundImage = `url('c-scene${i}.jpg')`;
                    } else if (sectionClass === 'lust-caution' && quoteSection.id == i) {
                        backgroundImage = `url('lc-scene${i}.png')`;
                    } else if (sectionClass === 'contemporary' && quoteSection.id == i) {
                        backgroundImage = `url('co-scene${i}.jpg')`;
                    } else if (sectionClass === 'future' && quoteSection.id == i) {
                        backgroundImage = `url('f-scene${i}.jpg')`;
                    }
                } else {  // Mobile backgrounds
                    if (sectionClass === 'romeo-juliet' && quoteSection.id == i) {
                        backgroundImage = `url('rj-phone${i}.jpg')`;
                    } else if (sectionClass === 'chava' && quoteSection.id == i) {
                        backgroundImage = `url('c-phone${i}.jpg')`;
                    } else if (sectionClass === 'lust-caution' && quoteSection.id == i) {
                        backgroundImage = `url('lc-phone${i}.png')`;
                    } else if (sectionClass === 'contemporary' && quoteSection.id == i) {
                        backgroundImage = `url('co-phone${i}.jpg')`;
                    } else if (sectionClass === 'future' && quoteSection.id == i) {
                        backgroundImage = `url('f-phone${i}.jpg')`;
                    }
                }
                // Apply the background image to the current quote
                if (quoteSection.id == i) {
                    quoteSection.style.backgroundImage = backgroundImage;
                }
            }
        });
    }

    // Initial call to set the correct background images
    updateBackgroundImages();

    // Update background images when the window is resized
    window.addEventListener('resize', updateBackgroundImages);
};

// Window resize event for switching video sources
window.addEventListener('resize', changeVideoSource);

// Function to change video source based on screen size
function changeVideoSource() {
    const video = document.getElementById('intro-video');
    const videoSource = document.getElementById('video-source');
    
    if (window.innerWidth > 500) {
        // Switch to the laptop video if the screen width is larger than 500px
        videoSource.src = 'video-laptop.mp4';
    } else {
        // Switch to the phone video for smaller screens
        videoSource.src = 'video-phone.mp4';
    }

    // Reload the video to apply the new source
    video.load();
}

// Call once to set the correct video on page load
changeVideoSource();
