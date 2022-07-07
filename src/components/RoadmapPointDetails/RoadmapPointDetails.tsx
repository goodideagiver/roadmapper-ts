import { useRoadmap } from '../../store/roadmap-slice';
import { Modal } from '../../UI/Modal/Modal';
import { PointControls } from './PointControls/PointControls';
import { RoadmapMidpoints } from './RoadmapMidpoints/RoadmapMidpoints';
import * as classes from './RoadmapPointDetails.module.css';

type Props = {
	roadmapPointId: string;
	onClose: () => void;
};

export const RoadmapPointDetails = ({ roadmapPointId, onClose }: Props) => {
	const { mainRoadmapPoints } = useRoadmap();
	const selectedRoadmapPoint = mainRoadmapPoints.find(
		(point) => point.id === roadmapPointId
	);

	if (!selectedRoadmapPoint) {
		return (
			<Modal
				visible={roadmapPointId.trim() !== ''}
				title='No roadmap point has ben found'
				onClose={onClose}
			>
				<p>No roadmap point to show</p>
			</Modal>
		);
	}

	return (
		<Modal
			onClose={onClose}
			visible={!!selectedRoadmapPoint}
			title={selectedRoadmapPoint.title}
			className={classes.modal}
		>
			<div className={classes.content}>
				<RoadmapMidpoints selectedRoadmapPoint={selectedRoadmapPoint} />
				<PointControls point={selectedRoadmapPoint} />
			</div>
		</Modal>
	);
};
