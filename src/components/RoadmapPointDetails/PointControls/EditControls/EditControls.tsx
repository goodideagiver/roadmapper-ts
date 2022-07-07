import { daysToYrsMthWeekDayString } from '../../../../helpers/timeDiff.helper';
import { useRoadmap } from '../../../../store/roadmap-slice';
import { Button } from '../../../../UI/Button/Button';
import { roadmapDataPoint } from '../../../Roadmap/Roadmap.types';
import classes from './EditControls.module.css';

type Props = {
	roadmapPoint: roadmapDataPoint;
};

//mark as finished

export const EditControls = ({ roadmapPoint }: Props) => {
	const { id, finished, title, midpoints, daysToComplete } = roadmapPoint;
	const completion = !finished ? 'Not finished' : 'Finished';

	const { mainRoadmapPoints } = useRoadmap();

	const orderInArray = mainRoadmapPoints.findIndex((el) => el.id === id);

	return (
		<div className={classes.root}>
			<div className={classes.order}>
				<div className={classes.info}>
					<p>Title: {title}</p>
					<p>Time: {daysToYrsMthWeekDayString(daysToComplete)}</p>
				</div>
				<Button>Edit name and time</Button>
			</div>
			<div className={classes.order}>
				<p className={classes.info}>{completion}</p>
				<Button>Mark as finished</Button>
			</div>
			<div className={classes.order}>
				<Button>Move up</Button>
				<p>Order: {orderInArray + 1}</p>
				<Button>Move Down</Button>
			</div>
			<div className={classes.order}>
				{!midpoints || midpoints.length === 0 ? <p>0 midpoints</p> : null}
				{midpoints && <div>Midpoints: {midpoints.length}</div>}
				<Button variant='success'>Add midpoint</Button>
			</div>
			<Button variant='danger'>Delete roadmap point</Button>
		</div>
	);
};
