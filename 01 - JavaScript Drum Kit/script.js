window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return // stop the function
    audio.currentTime = 0 // rewind to the start
    audio.play();
})