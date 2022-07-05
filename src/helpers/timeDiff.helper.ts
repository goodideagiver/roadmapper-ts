import { isPlural } from './isPlural.helper';

export const getMilisecondsBetweenDates = (date1: Date, date2: Date) => {
	if (date1 instanceof Date && date2 instanceof Date) {
		const diff = date2.getTime() - date1.getTime();
		return Math.abs(diff);
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

export const daysToYrsMthWeekDayString = (days: number): string => {
	const years = Math.floor(days / 365);
	const months = Math.floor((days % 365) / 30);
	const weeks = Math.floor(((days % 365) % 30) / 7);
	const daysLeft = Math.floor(((days % 365) % 30) % 7);

	let result = '';

	if (years > 0) {
		result += `${years} year${isPlural(years)}`;
	}

	if (months > 0) {
		if (result.length > 0) {
			result += ', ';
		}
		result += `${months} month${isPlural(months)}`;
	}

	if (weeks > 0) {
		if (result.length > 0) {
			result += ', ';
		}
		result += `${weeks} week${isPlural(weeks)}`;
	}

	if (daysLeft > 0) {
		if (result.length > 0) {
			result += ', ';
		}
		result += `${daysLeft} day${isPlural(daysLeft)}`;
	}

	return result;
};
