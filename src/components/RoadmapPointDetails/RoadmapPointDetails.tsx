import { useRoadmap } from '../../store/useRoadmap';
import { Button } from '../../UI/Button/Button';
import { Modal } from '../../UI/Modal/Modal';
import { PointControls } from './PointControls/PointControls';
import { RoadmapMidpoints } from './RoadmapMidpoints/RoadmapMidpoints';
import * as classes from './RoadmapPointDetails.module.css';

type Props = {
	visible: boolean;
	roadmapPointId: string;
	onClose: () => void;
	onExited: () => void;
	onDelete: () => void;
};

export const RoadmapPointDetails = ({
	roadmapPointId,
	onClose,
	onExited,
	visible,
	onDelete,
}: Props) => {
	const { mainRoadmapPoints } = useRoadmap();
	const selectedRoadmapPoint = mainRoadmapPoints.find(
		(point) => point.id === roadmapPointId
	);

	if (!selectedRoadmapPoint) {
		return (
			<Modal
				visible={visible && roadmapPointId.trim() !== ''}
				title='No roadmap point has ben found'
				onClose={onClose}
			>
				<p>No roadmap point to show</p>
				<Button onClick={onClose}>Close</Button>
			</Modal>
		);
	}

	return (
		<Modal
			onExited={onExited}
			onClose={onClose}
			visible={visible && !!selectedRoadmapPoint}
			title={selectedRoadmapPoint.title}
			className={classes.modal}
		>
			<div className={classes.content}>
				<RoadmapMidpoints selectedRoadmapPoint={selectedRoadmapPoint} />
				<PointControls
					onClose={onClose}
					onDelete={onDelete}
					point={selectedRoadmapPoint}
				/>
			</div>
		</Modal>
	);
};
