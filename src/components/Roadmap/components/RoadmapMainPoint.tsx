import { roadmapDataPoint } from '../Roadmap.types';

export const RoadmapMainPoint = ({
	finished,
	daysToComplete,
	title,
	midpoints,
}: roadmapDataPoint) => {
	return (
		<div>
			<div>Title: {title}</div>
			<div>Days to complete: {daysToComplete}</div>
			<div>{finished ? 'Zakończono' : 'Nie zakończono'}</div>
			{midpoints && midpoints.length > 0 && midpoints.toString()}
		</div>
	);
};
