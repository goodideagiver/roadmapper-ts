import { isPlural } from '../../../helpers/isPlural.helper';
import { daysToYrsMthWeekDayString } from '../../../helpers/timeDiff.helper';
import { roadmapDataPoint } from '../Roadmap.types';

import * as classes from './RoadmapMainPoint.module.css';

import { BiTimer } from 'react-icons/bi';
import { FinishedStatus } from './FinishedStatus';



export const RoadmapMainPoint = ({
	finished,
	daysToComplete,
	title,
	midpoints,
	onChoose,
}: roadmapDataPoint) => {
	return (
		<div className={classes.root} onClick={onChoose}>
			<div className={classes.title}>{title}</div>
			<div className={classes.textAndIcon}>
				<BiTimer />
				<span>To complete: {daysToYrsMthWeekDayString(daysToComplete)}</span>
			</div>
			<FinishedStatus finished={finished} />
			{midpoints && (
				<p className={classes.steps}>
					Has {midpoints.length} step{isPlural(midpoints.length)} inside{' '}
				</p>
			)}
		</div>
	);
};
