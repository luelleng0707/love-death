// JavaScript to trigger video play and content display
document.getElementById('play-button').addEventListener('click', function() {
    var video = document.getElementById('intro-video');
    video.play(); // Play the video
    video.muted = false; // Unmute the video
    this.style.display = 'none'; // Hide the play button
});

// When the video finishes playing, show the content and allow scrolling
document.getElementById('intro-video').addEventListener('ended', function() {
    // Add scrollable class to body for scrolling
    document.body.classList.add('scrollable');
    document.querySelector('.content').classList.add('visible'); // Show the content
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
