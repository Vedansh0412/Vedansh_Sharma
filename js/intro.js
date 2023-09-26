// New code for video background
function setupVideoBackground() {
    var vid = document.createElement('video');

    // Add class for styling
    vid.classList.add('playing');

    // Add a src to .vid
    vid.src = './video/smoke.mp4';

    // Load .vid
    vid.load();

    // Add .vid to body
    document.body.appendChild(vid);

    // Play video
    vid.play();

    /* Register ended event to vid
    || After video has ended...
    */
    vid.addEventListener('ended', function (e) {

        // Pause vid
        vid.pause();

        /* Reset time played. This method used
        || along with .pause() is equivalent to "stop"
        */
        vid.currentTime = 0;

        // Simulate a `non-playing state`
        vid.classList.remove('playing');

        /* Delay the call to remove vid in order
        || to preserve the fade-out effect.
        */
        setTimeout(function () {
            document.body.removeChild(vid);
        }, 2000);
    }, false);
}

// Call the functions in order
setupVideoBackground(); // Set up the video background
