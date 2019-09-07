const getClockConfig = ({hour, minute}) => {
	const lastFiveMinuteMark = Math.floor(minute / 5) * 5;
	const timeSinceLastFiveMinuteMark = minute - lastFiveMinuteMark;
	const isExact = timeSinceLastFiveMinuteMark % 5 === 0;
	const isNearly = !isExact && timeSinceLastFiveMinuteMark > 2;
	const isAbout = !isExact && !isNearly;
	const nearestFiveMinuteMark = isNearly
		? Math.ceil(minute / 5) * 5
		: lastFiveMinuteMark;
	const isOClock = nearestFiveMinuteMark === 0;
	const isPast = !isOClock && nearestFiveMinuteMark <= 30;
	const isTo = !isOClock && !isPast;
	const minuteMark =
		isPast || isOClock ? nearestFiveMinuteMark : 60 - nearestFiveMinuteMark;
	const nearestHour = isTo || (isOClock && isNearly) ? (hour + 1) % 24 : hour;
	const nearestHour12 = nearestHour > 12 ? nearestHour - 12 : nearestHour;
	const isNoon = nearestHour === 12;
	const isMidnight = nearestHour === 0;
	const isMorning = !isMidnight && nearestHour < 12;
	const isAfternoon = nearestHour > 12 && nearestHour <= 18;
	const isEvening = nearestHour > 18;

	return {
		isExact,
		isAbout,
		isNearly,
		minute: minuteMark,
		isOClock: isOClock && !isNoon && !isMidnight,
		isPast,
		isTo,
		hour: nearestHour12,
		isNoon,
		isMidnight,
		isMorning,
		isAfternoon,
		isEvening
	};
};

export default getClockConfig;
