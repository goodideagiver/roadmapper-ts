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
			<div>{title}</div>
			<div>{date.toLocaleDateString()}</div>
			{dateFinished && <div>{dateFinished.toLocaleDateString()}</div>}
			<div>{finished ? 'Zakończono' : 'Nie zakończono'}</div>
		</div>
	);
};
