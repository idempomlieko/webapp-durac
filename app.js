document.addEventListener('DOMContentLoaded', function() {
	const btn = document.getElementById('red-btn');
	const video = document.getElementById('surprise-video');
    const overlay = document.getElementById('flash-overlay');
    const btnImg = document.getElementById('btn-img');
	let colorInterval = null;
	btn.addEventListener('pointerdown', function() {
		btnImg.src = 'static/button_pressed.png';
		video.style.display = 'block';
		video.classList.add('bg-video');
		video.loop = true;
		video.currentTime = 0;
		video.volume = 1.0;
		video.play();
		if (!colorInterval) {
			colorInterval = setInterval(() => {
				overlay.style.background = `rgba(${rand255()},${rand255()},${rand255()},0.7)`;
			}, 150);
		}
	});

	btn.addEventListener('mouseup', stopMedia);
	btn.addEventListener('mouseleave', stopMedia);
	btn.addEventListener('touchend', stopMedia);
	btn.addEventListener('touchcancel', stopMedia);

	function stopMedia() {
		btnImg.src = 'static/button_unpressed.png';
		video.pause();
		video.loop = false;
		video.style.display = 'none';
		video.classList.remove('bg-video');
		if (colorInterval) {
			clearInterval(colorInterval);
			colorInterval = null;
			overlay.style.background = 'transparent';
		}
	}

	function rand255() {
		return Math.floor(Math.random() * 256);
	}
});
