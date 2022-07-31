import { useState } from 'react';
import { roadmapMidpoint } from '../../../../../../store/roadmap-slice';
import { useMidpoints } from '../../../../../../store/useMidpoints.hook';
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

	const { setMidpoints } = useMidpoints(mainPointId);

	const deleteAllMidpointsHandler = () => {
		setMidpoints([]);
	};

	const sortAscendingHandler = () => {
		const midpointsCopy = [...midpoints];

		midpointsCopy.sort((a, b) =>
			a.title.charCodeAt(0) < b.title.charCodeAt(0) ? 1 : -1
		);
		setMidpoints(midpointsCopy);
	};

	const sortDescendingHandler = () => {
		const midpointsCopy = [...midpoints];

		midpointsCopy.sort((a, b) =>
			a.title.charCodeAt(0) > b.title.charCodeAt(0) ? 1 : -1
		);
		setMidpoints(midpointsCopy);
	};

	const hasMultipleMidpoints = midpoints?.length > 1;

	const [deleteModalVisible, setDeleteModalVisible] = useState(false);

	const handleToggleAllFinished = () => {
		const allMidpointsReallyFinished = midpoints?.every(
			(midpoint) => midpoint.finished
		);

		const newMidpointsStatus = !allMidpointsReallyFinished;

		const midpointsCopy = midpoints?.map((midpoint) => ({
			...midpoint,
			finished: newMidpointsStatus,
		}));

		setMidpoints(midpointsCopy);
	};

	return (
		<div>
			<p>Control midpoints</p>
			<EditControlWrapper>
				<Button
					onClick={handleToggleAllFinished}
					disabled={mainPointFinished}
					variant='success'
				>
					Mark all {isAllMidpointsFinished ? 'unfinished' : 'finished'}
				</Button>
				<Button
					onClick={sortDescendingHandler}
					disabled={!hasMultipleMidpoints}
				>
					Sort desc
				</Button>
				<Button onClick={sortAscendingHandler} disabled={!hasMultipleMidpoints}>
					Sort asc
				</Button>
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
