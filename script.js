// Pop-up display for seonghwa_character.jpeg
function showPopup() {
    const popup = document.getElementById('seonghwaPopup');
    popup.style.display = 'block'; // Show the popup
    setTimeout(() => {
        popup.style.display = 'none'; // Hide after 2 seconds
    }, 2000);
}

// Show the popup 3 times at intervals
let count = 0;
const interval = setInterval(() => {
    if (count < 3) {
        showPopup();
        count++;
    } else {
        clearInterval(interval); // Stop after 3 popups
    }
}, 4000); // Popup every 4 seconds
