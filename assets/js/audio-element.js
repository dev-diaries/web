const audioEl = document.getElementById('js-audio');
const status = document.querySelector('.js-status');
const PLAYING = 'Audio is playing';
const NOT_PLAYING = 'Audio is not playing';

audioEl.addEventListener('play', (event) => {
    status.innerHTML = PLAYING;
});
audioEl.addEventListener('pause', (event) => {
    status.innerHTML = NOT_PLAYING;
});
audioEl.addEventListener('ended', (event) => {
    status.innerHTML = NOT_PLAYING;
});

