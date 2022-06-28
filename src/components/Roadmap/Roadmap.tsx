import { Children } from 'react';
import { RoadmapMainPoint } from './components/RoadmapMainPoint';
import { roadmapArray, roadmapDataPoint } from './Roadmap.types';

export const Roadmap = ({ roadmapArray }: { roadmapArray: roadmapArray }) => {
	let roadmapData;

	if (roadmapArray && roadmapArray.length > 0) {
		roadmapData = roadmapArray.map((data: roadmapDataPoint) => {
			const { title, date, dateFinished, midpoints, finished } = data;
			return (
				<RoadmapMainPoint
					finished={finished}
					date={date}
					dateFinished={dateFinished}
					title={title}
					midpoints={midpoints}
				/>
			);
		});
	} else {
		roadmapData = <div>Brak danych</div>;
	}

	return <div>{Children.toArray(roadmapData)}</div>;
};
