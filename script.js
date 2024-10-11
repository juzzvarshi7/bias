// Script to handle popup functionality
document.addEventListener('DOMContentLoaded', () => {
    const popupImg = document.getElementById('popup-img');
    let showPopupCount = 0;

    // Display the image as a popup two or three times when the page is loaded
    function showPopup() {
        if (showPopupCount < 3) {
            popupImg.style.display = 'block';
            setTimeout(() => {
                popupImg.style.display = 'none';
            }, 5000); // Hide popup after 5 seconds
            showPopupCount++;
        }
    }

    setTimeout(showPopup, 3000); // Show popup 3 seconds after page load
    setInterval(showPopup, 15000); // Repeat every 15 seconds
});
