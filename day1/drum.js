
    window.addEventListener('keydown', function(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!audio) return; // Exit if there's no audio element for the pressed key

    audio.currentTime = 0; // Rewind the audio to the beginning
    audio.play(); // Play the audio

    if (key) {
    key.classList.add('playing'); // Add a CSS class for visual feedback (optional)
}
});

    // Function to remove the 'playing' class after the transition ends
    function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

