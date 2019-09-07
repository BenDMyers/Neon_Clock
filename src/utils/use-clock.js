import {useState, useEffect} from 'react';
import getCurrentTime from './get-current-time';

const useClock = () => {
	const [currentTime, setCurrentTime] = useState(getCurrentTime());
	const [timer, setTimer] = useState();

	useEffect(() => {
		if (!timer) {
			const now = Date.now();
			const nextSec = (Math.floor(now / 1000) + 1) * 1000;
			const timeLeft = nextSec - now;

			window.setTimeout(() => {
				// on each second update the state time
				const interval = window.setInterval(
					() => setCurrentTime(getNow()),
					1000
				);

				// now our timer / interval is set
				setTimer(interval);
			}, timeLeft);
		}

		return () => {
			timer && window.clearInterval(timer) && setTimer(null);
		};
	}, [timer]);

	return currentTime;
};

export default useClock;
