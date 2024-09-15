function tweak() {
	let loginDiv = document.querySelector('.bili-mini-close-icon')
	if (loginDiv) {
		loginDiv.click()
		let videoDiv = document.querySelector('.bpx-player-video-wrap')
		if (videoDiv) {
			videoDiv.click()
		}
		console.log('tweaking', loginDiv, videoDiv)
	}
}

setInterval(tweak, 7113)
