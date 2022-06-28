import { Children } from 'react';
import { DiffLine } from './components/DiffLine';
import { RoadmapMainPoint } from './components/RoadmapMainPoint';
import { roadmapArray, roadmapDataPoint } from './Roadmap.types';
import { useRoadmapDateDiff } from './useRoadmapDateDiff.hook';

export const Roadmap = ({ roadmapArray }: { roadmapArray: roadmapArray }) => {
	let roadmapData;

	if (roadmapArray && roadmapArray.length > 0) {
		roadmapData = roadmapArray.map(
			(roadmapPointData: roadmapDataPoint, index) => {
				const { title, date, dateFinished, midpoints } = roadmapPointData;

				const roadmapPoint = (
					<RoadmapMainPoint
						finished={dateFinished ? true : false}
						date={date}
						dateFinished={dateFinished}
						title={title}
						midpoints={midpoints}
					/>
				);

				if (index > 0) {
					const previousDate = roadmapArray[index - 1].dateFinished || null;
					const currentDate = date || null;

					const diffDate = useRoadmapDateDiff(currentDate, previousDate);

					return (
						<>
							<DiffLine displayDateDiff={diffDate} />
							{roadmapPoint}
						</>
					);
				}

				return roadmapPoint;
			}
		);
	} else {
		roadmapData = <div>Brak danych</div>;
	}

	return <div>{Children.toArray(roadmapData)}</div>;
};
