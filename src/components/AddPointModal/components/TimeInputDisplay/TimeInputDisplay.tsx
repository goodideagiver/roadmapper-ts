import { daysToYrsMthWeekDayString } from '../../../../helpers/timeDiff.helper';
import * as classes from './TimeInputDisplay.module.css';

type TimeInputDisplayProps = {
	daysValue: number;
	daysFallback: string;
};

export const TimeInputDisplay = ({
	daysValue,
	daysFallback,
}: TimeInputDisplayProps) => {
	const formattedDaysDisplay = daysToYrsMthWeekDayString(daysValue);

	return (
		<div className={classes.root}>
			<p>Time to complete:</p>
			<span>{formattedDaysDisplay || daysFallback}</span>
		</div>
	);
};
