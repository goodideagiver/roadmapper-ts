import { daysToYrsMthWeekDayString } from '../../helpers/timeDiff.helper';
import { useRoadmap } from '../../store/useRoadmap';

import * as classes from './RoadmapSummary.module.css';

export const RoadmapSummary = () => {
	const { mainRoadmapPoints } = useRoadmap();

	const days = mainRoadmapPoints.filter((point) => point.daysToComplete);

	const totalDays = days.reduce((acc, curr) => acc + curr.daysToComplete, 0);

	return (
		<div className={classes.root}>
			<span className={classes.line} />
			<p className={classes.days}>{daysToYrsMthWeekDayString(totalDays)}</p>
			<span className={classes.line} />
		</div>
	);
};
