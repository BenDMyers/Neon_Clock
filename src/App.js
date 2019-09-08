import React from 'react';
import getCurrentTime from './utils/get-current-time';
import Clock from './Clock';
import Readout from './Readout';
import './styles.css';

const App = () => {
	const now = getCurrentTime();
	return (
		<div className="app">
			<Clock time={now} />
			<Readout time={now} />
		</div>
	);
};

export default App;
