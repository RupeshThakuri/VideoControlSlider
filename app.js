const lftBtn = document.querySelector('.left');
const rgtBtn = document.querySelector('.right');
const btn = document.querySelector('.slider');
const video = document.querySelector('.vid');

rgtBtn.addEventListener('click', () => {
    btn.classList.add('slide');
    video.pause();
});
lftBtn.addEventListener('click', () => {
    btn.classList.remove('slide');
    video.play();
});