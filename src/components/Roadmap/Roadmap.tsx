import { Children, useState } from 'react';

import { RoadmapMainPoint } from './components/RoadmapMainPoint';
import { roadmapArray, roadmapDataPoint } from './Roadmap.types';

import * as classes from './Roadmap.module.css';
import { RoadmapPointDetails } from '../RoadmapPointDetails/RoadmapPointDetails';
import { useRoadmap } from '../../store/useRoadmap';

export const Roadmap = ({ roadmapArray }: { roadmapArray: roadmapArray }) => {
	const [pickedId, setPickedId] = useState<string>('');
	const [modalVisible, setModalVisible] = useState<boolean>(false);

	const { deleteRoadmapPointById } = useRoadmap();

	const handleClose = () => {
		setModalVisible(false);
	};

	const pickRoadmapToEditHandler = (id: string) => {
		setPickedId(id);
		setModalVisible(true);
	};

	const onDelete = () => {
		setModalVisible(false);
		deleteRoadmapPointById(pickedId);
	};

	const onExitedHandler = (callback?: () => void) => {
		setPickedId('');
		if (callback) {
			callback();
		}
	};

	let roadmapData;

	if (roadmapArray && roadmapArray.length > 0) {
		roadmapData = roadmapArray.map((roadmapPointData: roadmapDataPoint) => {
			const { title, midpoints, id, finished } = roadmapPointData;

			const roadmapPoint = (
				<RoadmapMainPoint
					id={id}
					onChoose={() => pickRoadmapToEditHandler(id)}
					finished={finished}
					daysToComplete={roadmapPointData.daysToComplete}
					title={title}
					midpoints={midpoints}
				/>
			);

			return roadmapPoint;
		});
	} else {
		roadmapData = <div className={classes.info}>No roadmap data</div>;
	}

	return (
		<>
			<div className={classes.root}>{Children.toArray(roadmapData)}</div>
			<RoadmapPointDetails
				onExited={onExitedHandler}
				visible={modalVisible}
				onClose={handleClose}
				onDelete={onDelete}
				roadmapPointId={pickedId}
			/>
		</>
	);
};
