import { isPlural } from '../../../helpers/isPlural.helper';
import { daysToYrsMthWeekDayString } from '../../../helpers/timeDiff.helper';
import { roadmapDataPoint } from '../Roadmap.types';

import * as classes from './RoadmapMainPoint.module.css';

import { BiTimer } from 'react-icons/bi';
import { FinishedStatus } from './FinishedStatus';
import Marquee from 'react-fast-marquee';

export const RoadmapMainPoint = ({
	finished,
	daysToComplete,
	title,
	midpoints,
	onChoose,
}: roadmapDataPoint) => {
	const timePhrase = finished ? 'Completed in:' : 'To complete:';
	return (
		<button
			className={`${classes.root} ${finished ? classes.finished : ''}`}
			onClick={onChoose}
		>
			<Marquee
				gradient={false}
				play={title.length > 15}
				pauseOnHover={true}
				pauseOnClick={true}
			>
				<div className={classes.title}>{title}</div>
			</Marquee>
			<div className={classes.textAndIcon}>
				<BiTimer />
				<span>
					{timePhrase} {daysToYrsMthWeekDayString(daysToComplete)}
				</span>
			</div>
			<FinishedStatus finished={finished} />
			{midpoints && !!midpoints.length && (
				<p className={classes.steps}>
					Has {midpoints.length} step{isPlural(midpoints.length)} inside{' '}
				</p>
			)}
		</button>
	);
};
