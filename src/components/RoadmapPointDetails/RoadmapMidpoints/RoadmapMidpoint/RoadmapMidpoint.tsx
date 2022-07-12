import { useRef, useState } from 'react';
import { daysToYrsMthWeekDayString } from '../../../../helpers/timeDiff.helper';
import { roadmapMidpoint } from '../../../../store/roadmap-slice';
import { useRoadmap } from '../../../../store/useRoadmap';
import { Button } from '../../../../UI/Button/Button';

import {
	FiArrowUp,
	FiArrowDown,
	FiCheckCircle,
	FiCircle,
	FiTrash,
} from 'react-icons/fi';

import * as classes from './RoadmapMidpoint.module.css';
import { useClickOutside } from '../../../../hooks/useClickOutside.hook';
import { ConfirmModal } from '../../../../UI/ConfirmModal/ConfirmModal';
import { MidpointControls } from './MidpointControls';

type Props = {
	midpoint: roadmapMidpoint;
	mainPointId: string;
};
export const RoadmapMidpoint = ({ midpoint, mainPointId }: Props) => {
	const [optionsOpen, setOptionsOpen] = useState(false);
	const midpointRef = useRef(null);

	const {
		getMidpointsByPointId,
		setMidpointsByPointId,
		setMidpointFinishedByPointIdAndMidpointId,
		deleteMidpointByPointAndMidpointId,
	} = useRoadmap();

	const toggleOptions = () => setOptionsOpen(!optionsOpen);

	const formattedDays = daysToYrsMthWeekDayString(midpoint.daysToComplete);

	useClickOutside(midpointRef, () => setOptionsOpen(false));

	const toggleMidpointFinished = () => {
		setMidpointFinishedByPointIdAndMidpointId(
			mainPointId,
			midpoint.id,
			!midpoint.finished
		);
	};

	const updatePointMidpoints = (newMidpoints: roadmapMidpoint[]) => {
		setMidpointsByPointId(mainPointId, newMidpoints);
	};

	const moveMidpointUpHandler = () => {
		const oldMidpoints = getMidpointsByPointId(mainPointId);

		if (!oldMidpoints || oldMidpoints.length === 1) return;

		const thisPointIndex = oldMidpoints.findIndex(
			(searchedMidpoint) => searchedMidpoint.id === midpoint.id
		);

		if (thisPointIndex === 0) {
			return;
		}

		const newMidpoints = [...oldMidpoints];
		const thisPoint = newMidpoints[thisPointIndex];
		const prevPoint = newMidpoints[thisPointIndex - 1];

		newMidpoints[thisPointIndex] = prevPoint;
		newMidpoints[thisPointIndex - 1] = thisPoint;

		updatePointMidpoints(newMidpoints);
	};

	const moveMidpointDownHandler = () => {
		const oldMidpoints = getMidpointsByPointId(mainPointId);

		if (!oldMidpoints || oldMidpoints.length === 1) return;

		const thisPointIndex = oldMidpoints.findIndex(
			(searchedMidpoint) => searchedMidpoint.id === midpoint.id
		);

		if (thisPointIndex === oldMidpoints.length - 1) {
			return;
		}

		const newMidpoints = [...oldMidpoints];
		const thisPoint = newMidpoints[thisPointIndex];
		const nextPoint = newMidpoints[thisPointIndex + 1];

		newMidpoints[thisPointIndex] = nextPoint;
		newMidpoints[thisPointIndex + 1] = thisPoint;

		updatePointMidpoints(newMidpoints);
	};

	const [deleteModalVisible, setDeleteModalVisible] = useState(false);

	const handleMidpointDelete = () => {
		setDeleteModalVisible(false);
		deleteMidpointByPointAndMidpointId(mainPointId, midpoint.id);
	};

	return (
		<div
			ref={midpointRef}
			className={`${classes.midpoint} ${
				midpoint.finished ? classes.finished : ''
			}`}
			key={midpoint.id}
		>
			<div className={classes.info}>
				<p>{midpoint.title}</p>
				<p>{formattedDays}</p>
				<Button size='sm' onClick={toggleOptions}>
					Edit
				</Button>
			</div>
			{optionsOpen && (
				<MidpointControls
					midpointFinished={midpoint.finished}
					moveMidpointDownHandler={moveMidpointDownHandler}
					moveMidpointUpHandler={moveMidpointUpHandler}
					toggleMidpointFinished={toggleMidpointFinished}
					showDeleteModalHandler={() => setDeleteModalVisible(true)}
				/>
			)}
			<ConfirmModal
				visible={deleteModalVisible}
				message='Are you sure you want to delete this midpoint?'
				onCancel={() => setDeleteModalVisible(false)}
				onConfirm={handleMidpointDelete}
				title='Delete midpoint'
			/>
		</div>
	);
};
