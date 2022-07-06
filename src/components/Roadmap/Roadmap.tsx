import { Children } from 'react';

import { RoadmapMainPoint } from './components/RoadmapMainPoint';
import { roadmapArray, roadmapDataPoint } from './Roadmap.types';

import * as classes from './Roadmap.module.css';

export const Roadmap = ({ roadmapArray }: { roadmapArray: roadmapArray }) => {
	let roadmapData;

	if (roadmapArray && roadmapArray.length > 0) {
		roadmapData = roadmapArray.map((roadmapPointData: roadmapDataPoint) => {
			const { title, midpoints } = roadmapPointData;

			const roadmapPoint = (
				<RoadmapMainPoint
					finished={false}
					daysToComplete={roadmapPointData.daysToComplete}
					title={title}
					midpoints={midpoints}
				/>
			);

			return roadmapPoint;
		});
	} else {
		roadmapData = <div>Brak danych</div>;
	}

	return <div className={classes.root}>{Children.toArray(roadmapData)}</div>;
};
