const getReadout = (config) => {
	return [
		true, // IT IS
		config.isAbout, // ABOUT
		config.isNearly, // NEARLY
		config.minute === 10, // TEN
		config.minute === 15, // QUARTER
		config.minute === 20 || config.minute === 25, // TWENTY
		config.minute === 5 || config.minute === 25, // FIVE
		config.minute === 30, // HALF
		config.isPast, // PAST
		config.isTo, // TO
		config.hour === 1, // ONE
		config.hour === 2, // TWO
		config.hour === 3, // THREE
		config.hour === 4, // FOUR
		config.hour === 5, // FIVE
		config.hour === 6, // SIX
		config.hour === 7, // SEVEN
		config.hour === 8, // EIGHT
		config.hour === 9, // NINE
		config.hour === 10, // TEN
		config.hour === 11, // ELEVEN
		config.isNoon, // NOON
		config.isMidnight, // MIDNIGHT
		config.isOClock, // O' CLOCK
		config.isMorning || config.isAfternoon || config.isEvening, // IN THE
		config.isMorning, // MORNING
		config.isAfternoon, // AFTERNOON
		config.isEvening // EVENING
	];
};

export default getReadout;
