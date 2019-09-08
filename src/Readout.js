import React from 'react';
import getClockConfig from './utils/get-clock-config';
import getReadout from './utils/get-readout';
import words from './words';

const Readout = ({time}) => {
	const clockConfig = getClockConfig(time);
	const readoutConfig = getReadout(clockConfig);

	const wordsDisplay = words.map((word, index) => {
		const glow = readoutConfig[index] ? 'glow' : 'dim';
		const key = `word-${index}`;
		return (
			<span key={key} className={`word ${glow}`}>
				{word}
			</span>
		);
	});

	return (
		<div>
			<div className="words">{wordsDisplay}</div>
			<div className="timer">{time.display}</div>
		</div>
	);
};

export default Readout;
