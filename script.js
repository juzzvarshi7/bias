// script.js

// Get references to the audio element and the mute button
const audio = document.getElementById('background-audio');
const muteButton = document.getElementById('mute-button');

// Toggle mute and unmute functionality
muteButton.addEventListener('click', () => {
    if (audio.muted) {
        audio.muted = false;
        muteButton.textContent = 'Mute';
    } else {
        audio.muted = true;
        muteButton.textContent = 'Unmute';
    }
});
