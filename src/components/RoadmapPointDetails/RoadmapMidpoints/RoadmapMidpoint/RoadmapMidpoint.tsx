import { useRef, useState } from 'react';

import { roadmapMidpoint } from '../../../../store/roadmap-slice';

import * as classes from './RoadmapMidpoint.module.css';
import { useClickOutside } from '../../../../hooks/useClickOutside.hook';
import { ConfirmModal } from '../../../../UI/ConfirmModal/ConfirmModal';
import { MidpointControls } from './MidpointControls';
import { MidpointInfo } from './MidpointInfo';
import { useEditMidpoint } from './useEditMidpoint';

type Props = {
	midpoint: roadmapMidpoint;
	mainPointId: string;
};
export const RoadmapMidpoint = ({ midpoint, mainPointId }: Props) => {
	const [optionsOpen, setOptionsOpen] = useState(false);
	const midpointRef = useRef(null);

	const toggleOptions = () => setOptionsOpen(!optionsOpen);

	useClickOutside(midpointRef, () => setOptionsOpen(false));

	const {
		deleteModalVisible,
		handleMidpointDelete,
		moveMidpointDownHandler,
		moveMidpointUpHandler,
		toggleMidpointFinished,
		showDeleteModalHandler,
		hideDeleteModalHandler,
		midpointIndex,
		midpointsCount,
	} = useEditMidpoint(mainPointId, midpoint);

	return (
		<div
			ref={midpointRef}
			className={`${classes.midpoint} ${
				midpoint.finished ? classes.finished : ''
			}`}
			key={midpoint.id}
		>
			<MidpointInfo
				daysToComplete={midpoint.daysToComplete}
				title={midpoint.title}
				toggleOptions={toggleOptions}
				finished={midpoint.finished}
			/>
			{optionsOpen && (
				<MidpointControls
					midpointFinished={midpoint.finished}
					moveMidpointDownHandler={moveMidpointDownHandler}
					moveMidpointUpHandler={moveMidpointUpHandler}
					toggleMidpointFinished={toggleMidpointFinished}
					showDeleteModalHandler={showDeleteModalHandler}
					midpointIndex={midpointIndex}
					midpointsCount={midpointsCount}
				/>
			)}
			<ConfirmModal
				visible={deleteModalVisible}
				message='Are you sure you want to delete this midpoint?'
				onCancel={hideDeleteModalHandler}
				onConfirm={handleMidpointDelete}
				title='Delete midpoint'
			/>
		</div>
	);
};
