import { useState } from 'react';
import { isPlural } from '../../../../../../helpers/isPlural.helper';
import { roadmapDataPoint } from '../../../../../../store/roadmap-slice';
import { Button } from '../../../../../../UI/Button/Button';
import { ConfirmModal } from '../../../../../../UI/ConfirmModal/ConfirmModal';

type Props = {
	roadmapPoint: roadmapDataPoint;
	onDelete: () => void;
};

export const DeleteRoadmapPoint = ({ roadmapPoint, onDelete }: Props) => {
	const { midpoints, title } = roadmapPoint;

	const [deleteModalVisible, setDeleteModalVisible] = useState(false);

	const midpointsCount = midpoints?.length;

	const confirmDeleteRoadmapPointHandler = () => {
		setDeleteModalVisible(false);
		onDelete();
	};

	return (
		<>
			<Button onClick={() => setDeleteModalVisible(true)} variant='danger'>
				Delete roadmap point
			</Button>
			<ConfirmModal
				onConfirm={confirmDeleteRoadmapPointHandler}
				message={`Do you want to delete roadmap point named ${title}? ${
					midpointsCount
						? `You will also loose ${midpointsCount} midpoint${isPlural(
								midpointsCount
						  )}.`
						: ''
				}`}
				title='Delete roadmap point'
				onCancel={() => setDeleteModalVisible(false)}
				visible={deleteModalVisible}
			/>
		</>
	);
};
