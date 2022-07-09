import { roadmapDataPoint } from '../../../store/roadmap-slice';
import { RoadmapMidpoint } from './RoadmapMidpoint/RoadmapMidpoint';
import * as classes from './RoadmapMidpoints.module.css';

type Props = {
	selectedRoadmapPoint: roadmapDataPoint;
};

export const RoadmapMidpoints = ({ selectedRoadmapPoint }: Props) => {
	const midpoints = selectedRoadmapPoint.midpoints;

	if (!midpoints || midpoints.length === 0) {
		return (
			<div className={`${classes.noMidpoints} ${classes.midpoints}`}>
				<p>No midpoints for this roadmap point.</p>
			</div>
		);
	}

	return (
		<div className={classes.midpoints}>
			{midpoints.map((midpoint) => (
				<RoadmapMidpoint key={midpoint.id} midpoint={midpoint} />
			))}
		</div>
	);
};
