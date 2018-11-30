const checkTime = arg => {
	return ('0' + arg).slice(-2);
}

const displayTime = () => {
	let result = '';
	let today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	result = `${h}:${m}:${s}`;
	const clock = document.getElementById('clock');
	clock.textContent = result;
	setTimeout(displayTime, 500);
}

// const body = document.querySelector('body');
// body.addEventListener("load", displayTime);
// body.onload = displayTime;
document.addEventListener("DOMContentLoaded", displayTime);