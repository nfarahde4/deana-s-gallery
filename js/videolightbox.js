// JavaScript Document
	window.onload = function() {

  const thumb = document.querySelector('.small-thumb');
  const overlay = document.getElementById('timelapse-video-overlay');
  const wrapper = document.getElementById('timelapse-video-wrapper');
  const video = document.getElementById('timelapse');
  const closeBtn = document.getElementById('close-timelapse-video');

  thumb.addEventListener('click', () => {
    const videoSrc = thumb.getAttribute('data-video');
    video.src = videoSrc;
    overlay.style.display = 'block';
    wrapper.style.display = 'block';
    video.play();
  });

  closeBtn.addEventListener('click', () => {
    video.pause();
    video.src = ''; // Reset
    overlay.style.display = 'none';
    wrapper.style.display = 'none';
  });
		};
