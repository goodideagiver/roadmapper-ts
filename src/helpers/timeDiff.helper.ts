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
