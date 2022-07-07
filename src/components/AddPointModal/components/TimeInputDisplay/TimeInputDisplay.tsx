import { useEffect, useState } from 'react';
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
	const [highlight, setHighlight] = useState('');

	useEffect(() => {
		if (daysValue > 0) {
			setHighlight(classes.highlight);

			const days = setTimeout(() => {
				setHighlight('');
			}, 200);
			return () => {
				clearTimeout(days);
			};
		}
	}, [daysValue]);

	return (
		<div className={classes.root}>
			<p>Time to complete:</p>
			<span className={`${classes.time} ${highlight}`}>{formattedDaysDisplay || daysFallback}</span>
		</div>
	);
};
