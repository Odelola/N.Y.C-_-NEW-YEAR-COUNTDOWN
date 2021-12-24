const secondsText = document.getElementById('seconds');
const minutesText = document.getElementById('minutes');
const hoursText = document.getElementById('hours');
const daysText = document.getElementById('days');

function countDown () {
	var deadlineDate = new Date("Jan 1, 2022 00:00:00").getTime();
	var presentDate= new Date().getTime();
	var timeLeft = deadlineDate - presentDate;
	var daysValue = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	var hoursValue = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	var minutesValue = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
	var secondsValue = Math.floor(timeLeft % (1000 * 60) / (1000));

	secondsText.textContent = secondsValue;
	minutesText.textContent = minutesValue;
	hoursText.textContent = hoursValue;
	daysText.textContent = daysValue;

	if(timeLeft < 0){
		clearInterval();
	}	
}

setInterval(countDown, 1000);