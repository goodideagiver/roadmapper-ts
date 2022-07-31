import { useState } from 'react';
import { roadmapMidpoint } from '../../../../store/roadmap-slice';
import { useMidpoints } from '../../../../store/useMidpoints.hook';

export const useEditMidpoint = (
	mainPointId: string,
	midpoint: roadmapMidpoint
) => {
	const {
		setMidpoints,
		getMidpoints,
		setMidpointFinishedByMidpointId,
		deleteMidpointByMidpointId,
	} = useMidpoints(mainPointId);

	const toggleMidpointFinished = () => {
		setMidpointFinishedByMidpointId(midpoint.id, !midpoint.finished);
	};

	const updatePointMidpoints = (newMidpoints: roadmapMidpoint[]) => {
		setMidpoints(newMidpoints);
	};

	const moveMidpointUpHandler = () => {
		const oldMidpoints = getMidpoints();

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
		const oldMidpoints = getMidpoints();

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
		deleteMidpointByMidpointId(midpoint.id);
	};

	const midpointsCount = getMidpoints()?.length ?? 0;

	const midpointIndex =
		getMidpoints()?.findIndex(
			(searchedMidpoint) => searchedMidpoint.id === midpoint.id
		) || 0;

	return {
		midpointIndex,
		midpointsCount,
		hideDeleteModalHandler: () => setDeleteModalVisible(false),
		showDeleteModalHandler: () => setDeleteModalVisible(true),
		deleteModalVisible,
		handleMidpointDelete,
		toggleMidpointFinished,
		moveMidpointUpHandler,
		moveMidpointDownHandler,
	};
};
