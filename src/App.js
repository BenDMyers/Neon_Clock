import React from 'react';
import useClock from './utils/use-clock';
import Clock from './Clock';
import Readout from './Readout';
import './styles.css';

const App = () => {
	const now = useClock();
	return (
		<div className="app">
			<Clock time={now} />
			<Readout time={now} />
		</div>
	);
};

export default App;
