import { isPlural } from '../../../helpers/isPlural.helper';
import { daysToYrsMthWeekDayString } from '../../../helpers/timeDiff.helper';
import { roadmapDataPoint } from '../Roadmap.types';

import * as classes from './RoadmapMainPoint.module.css';

export const RoadmapMainPoint = ({
	finished,
	daysToComplete,
	title,
	midpoints,
}: roadmapDataPoint) => {
	return (
		<div className={classes.root}>
			<div className={classes.title}>{title}</div>
			<div>Days to complete: {daysToYrsMthWeekDayString(daysToComplete)}</div>
			<div>{finished ? 'Finished' : 'Not finished'}</div>
			{midpoints && (
				<p className={classes.steps}>
					Has {midpoints.length} step{isPlural(midpoints.length)} inside{' '}
				</p>
			)}
		</div>
	);
};
