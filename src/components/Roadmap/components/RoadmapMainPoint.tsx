import { roadmapDataPoint } from '../Roadmap.types';

export const RoadmapMainPoint = ({
	finished,
	date,
	dateFinished,
	title,
	midpoints,
}: roadmapDataPoint) => {
	return (
		<div>
			<div>Title: {title}</div>
			<div>Start date: {date.toLocaleDateString()}</div>
			{dateFinished && (
				<div>Date finished: {dateFinished.toLocaleDateString()}</div>
			)}
			<div>{finished ? 'Zakończono' : 'Nie zakończono'}</div>
		</div>
	);
};
