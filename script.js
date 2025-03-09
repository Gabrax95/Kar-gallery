document.querySelectorAll('.galeria-container__img > img').forEach(image => {
    image.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            image.requestFullscreen().then(() => {
                // Apply responsive styles when entering fullscreen
                image.style.width = '100vw'; // Full viewport width
                image.style.height = '100vh'; // Full viewport height
                image.style.objectFit = 'contain'; // Maintain aspect ratio
            });
        } else {
            document.exitFullscreen();
        }
    });
});

// Exit fullscreen and reset styles when leaving fullscreen
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        // Reset styles when exiting fullscreen
        document.querySelectorAll('.galeria-container__img > img').forEach(image => {
            image.style.width = '';
            image.style.height = '';
            image.style.objectFit = '';
        });
    }
});