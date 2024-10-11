// script.js

// Automatically play the audio without showing controls
const audio = document.getElementById('background-audio');
audio.volume = 0.5; // Set the volume to a comfortable level


// Add this to your script.js
function showPopup() {
    const popup = document.getElementById('seonghwaPopup');
    popup.style.display = 'block'; // Show the popup
    setTimeout(() => {
        popup.style.display = 'none'; // Hide after 2 seconds
    }, 2000);
}

// Show the popup multiple times (2-3 times)
let count = 0;
const interval = setInterval(() => {
    if (count < 3) {
        showPopup();
        count++;
    } else {
        clearInterval(interval); // Stop after 3 popups
    }
}, 4000); // Popup every 4 seconds
