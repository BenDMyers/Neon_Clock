import React from 'react';

const Clock = ({time}) => {
	const clockMarks = [
		'XII',
		'I',
		'II',
		'III',
		'IV',
		'V',
		'VI',
		'VII',
		'VIII',
		'IX',
		'X',
		'XI'
	];

	// Calculate the angles of rotation of each hand (in degrees)
	const hourAngle = ((time.hour % 12) * 60 + time.minute) / 2;
	const minuteAngle = (time.minute * 60 + time.second) / 10;
	const secondAngle = time.second * 6;

	return (
		<div className="clock">
			<div>
				{clockMarks.map((mark) => (
					<span key={mark} className="mark">
						{mark}
					</span>
				))}
			</div>
			<div>
				{Array(60)
					.fill(1)
					.map((_, index) => (
						<span key={index} className="tick" />
					))}
			</div>
			<div className="inner-circle" />
			<div className="inner-circle-2" />
			<div
				className="hour-hand"
				style={{transform: `rotate(${hourAngle}deg)`}}
			/>
			<div
				className="minute-hand"
				style={{transform: `rotate(${minuteAngle}deg)`}}
			/>
			<div
				className="second-hand"
				style={{transform: `rotate(${secondAngle}deg)`}}
			/>
		</div>
	);
};

export default Clock;
