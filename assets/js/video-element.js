const videoEl = document.getElementById('js-video');
const status = document.querySelector('.js-status');
const seeking = document.querySelector('.js-seeking');
const PLAYING = 'Video is playing';
const NOT_PLAYING = 'Video is not playing';
const FINISHED_PLAYING = 'Video finished playing';
const SEEKING = 'Video is seeking';
const NOT_SEEKING = 'Video is not seeking';

videoEl.addEventListener('play', (event) => {
    status.innerHTML = PLAYING;
});
videoEl.addEventListener('pause', (event) => {
    status.innerHTML = NOT_PLAYING;
});

videoEl.addEventListener('ended', (event) => {
    status.innerHTML = FINISHED_PLAYING;
});

videoEl.addEventListener('seeking', (event) => {
    seeking.innerHTML = SEEKING;
});

videoEl.addEventListener('seeked', (event) => {
    seeking.innerHTML = NOT_SEEKING;
});
