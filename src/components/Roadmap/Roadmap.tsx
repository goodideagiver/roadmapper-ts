import { Children } from 'react';
import { DiffLine } from './components/DiffLine';
import { RoadmapMainPoint } from './components/RoadmapMainPoint';
import { roadmapArray, roadmapDataPoint } from './Roadmap.types';

export const Roadmap = ({ roadmapArray }: { roadmapArray: roadmapArray }) => {
	let roadmapData;

	if (roadmapArray && roadmapArray.length > 0) {
		roadmapData = roadmapArray.map((data: roadmapDataPoint, index) => {
			const { title, date, dateFinished, midpoints, finished } = data;

			const roadmapPoint = (
				<RoadmapMainPoint
					finished={finished}
					date={date}
					dateFinished={dateFinished}
					title={title}
					midpoints={midpoints}
				/>
			);

			if (index > 0) {
				return (
					<>
						<DiffLine displayDateDiff='placeholder' />
						{roadmapPoint}
					</>
				);
			}

			return roadmapPoint;
		});
	} else {
		roadmapData = <div>Brak danych</div>;
	}

	return <div>{Children.toArray(roadmapData)}</div>;
};
