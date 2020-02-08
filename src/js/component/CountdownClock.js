import React from "react";
import Clock from "react-live-clock";
import Countdown from "react-countdown";

let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let timeLeft = 0;
let newSeconds = minutes * 60;
let sum = newSeconds + seconds;

if (minutes < 30) {
	timeLeft = (1800 - sum) * 1000;
}
if (minutes > 30) {
	timeLeft = (3600 - sum) * 1000;
}
console.log(timeLeft);

const Count = () => {
	return (
		<div>
			<Countdown date={Date.now() + timeLeft} />
		</div>
	);
};

export default Count;
