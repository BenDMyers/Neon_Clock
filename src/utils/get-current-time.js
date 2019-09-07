function getCurrentTime() {
	const now = new Date(Date.now());
	const hour = now.getHours();
	const minute = now.getMinutes();
	const second = now.getSeconds();
	const display = now.toLocaleString();

	return {
		hour,
		minute,
		second,
		display
	};
}

export default getCurrentTime;
