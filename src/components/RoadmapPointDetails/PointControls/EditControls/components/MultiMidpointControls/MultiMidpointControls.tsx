import { useState } from 'react';
import { roadmapMidpoint } from '../../../../../../store/roadmap-slice';
import { useRoadmap } from '../../../../../../store/useRoadmap';
import { Button } from '../../../../../../UI/Button/Button';
import { ConfirmModal } from '../../../../../../UI/ConfirmModal/ConfirmModal';
import { EditControlWrapper } from '../../EditControlWrapper';

type Props = {
	midpoints: roadmapMidpoint[];
	mainPointFinished: boolean;
	mainPointId: string;
};

export const MultiMidpointControls = ({
	midpoints,
	mainPointFinished,
	mainPointId,
}: Props) => {
	const isAllMidpointsFinished =
		midpoints?.every((midpoint) => midpoint.finished) || mainPointFinished;

	const { setMidpointsByPointId } = useRoadmap();

	const deleteAllMidpointsHandler = () => {
		setMidpointsByPointId(mainPointId, []);
	};

	const [deleteModalVisible, setDeleteModalVisible] = useState(false);

	return (
		<div>
			<p>Control midpoints</p>
			<EditControlWrapper>
				<Button disabled={mainPointFinished} variant='success'>
					Mark all {isAllMidpointsFinished ? 'unfinished' : 'finished'}
				</Button>
				<Button>Sort asc</Button>
				<Button>Sort Desc</Button>
				<Button onClick={() => setDeleteModalVisible(true)} variant='danger'>
					Delete all
				</Button>
				<ConfirmModal
					title='Delete all midpoints'
					visible={deleteModalVisible}
					onCancel={() => setDeleteModalVisible(false)}
					onConfirm={deleteAllMidpointsHandler}
					message='Are you sure you want to delete all midpoints'
				/>
			</EditControlWrapper>
		</div>
	);
};
