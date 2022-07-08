import { roadmapDataPoint } from '../../../store/roadmap-slice';
import { Button } from '../../../UI/Button/Button';
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
				<div className={classes.midpoint} key={midpoint.id}>
					<div>
						<p>{midpoint.title}</p>
						<p>{midpoint.daysToComplete}</p>
					</div>
					<div className={classes.controls}>
						<Button>Finished</Button>
						<Button>Up</Button>
						<Button>Down</Button>
					</div>
				</div>
			))}
		</div>
	);
};
