import React from 'react';
import getCurrentTime from './utils/get-current-time';
import getClockConfig from './utils/get-clock-config';
import getReadout from './utils/get-readout';
import words from './words';

const App = () => {
	const now = getCurrentTime();
	const clockConfig = getClockConfig(now);
	const readoutConfig = getReadout(clockConfig);
	const readout = words.filter((_, index) => readoutConfig[index]).join(' ');
	console.log(now, clockConfig, readoutConfig, readout);
	return <div>{readout}</div>;
};

export default App;
