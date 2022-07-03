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
			{midpoints &&
				midpoints.length > 0 &&
				midpoints.map((midpoint) => (
					<li key={midpoint.title}>
						<p>{midpoint.title}</p>
						<p>{midpoint.finished}</p>
						<p>{midpoint.daysToComplete}</p>
					</li>
				))}
		</div>
	);
};
