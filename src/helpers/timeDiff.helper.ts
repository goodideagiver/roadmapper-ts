export const getMilisecondsBetweenDates = (startDate: Date, endDate: Date) => {
	if (startDate instanceof Date && endDate instanceof Date) {
		const diff = endDate.getTime() - startDate.getTime();
		if (diff < 0) {
			throw new Error('End date must be greater than start date');
		}
		return diff;
	} else {
		throw new Error('Invalid date passed as argument');
	}
};

export const milisecondsToBiggestTimeUnit = (miliseconds: number): string => {
	const seconds = Math.floor(miliseconds / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);
	if (years > 0) {
		return `${years} years`;
	} else if (months > 0) {
		return `${months} months`;
	} else if (days > 0) {
		return `${days} days`;
	} else if (hours > 0) {
		return `${hours} hours`;
	} else if (minutes > 0) {
		return `${minutes} minutes`;
	} else if (seconds > 0) {
		return `${seconds} seconds`;
	} else {
		return `${miliseconds} miliseconds`;
	}
};
