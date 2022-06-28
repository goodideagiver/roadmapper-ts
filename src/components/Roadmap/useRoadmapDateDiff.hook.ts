import {
	getMilisecondsBetweenDates,
	milisecondsToBiggestTimeUnit,
} from '../../helpers/timeDiff.helper';

type DateOrNull = Date | null;

export const useRoadmapDateDiff = (
	currentDate: DateOrNull,
	previousDate: DateOrNull
) => {
	let diffDate: null | string = null;

	if (previousDate && currentDate) {
		const diffBetweenDatesInMiliseconds: number = getMilisecondsBetweenDates(
			previousDate,
			currentDate
		);

		diffDate = milisecondsToBiggestTimeUnit(diffBetweenDatesInMiliseconds);
	}

	return diffDate;
};
