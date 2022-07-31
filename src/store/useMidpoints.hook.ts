import { useDispatch } from 'react-redux';
import { roadmapMidpoint, roadmapSlice } from './roadmap-slice';
import { useRoadmap } from './useRoadmap';

export const useMidpoints = (mainPointId: string) => {
	const dispatch = useDispatch();

	const { mainRoadmapPoints } = useRoadmap();

	const addMidpoint = (midpoint: roadmapMidpoint) => {
		dispatch(
			roadmapSlice.actions.addMidpointByPointId({
				pointId: mainPointId,
				midpoint,
			})
		);
	};

	const setMidpoints = (midpoints: roadmapMidpoint[]) => {
		dispatch(
			roadmapSlice.actions.setMidpointsByPointId({
				pointId: mainPointId,
				midpoints,
			})
		);
	};

	const getMidpoints = () => {
		const point = mainRoadmapPoints.find((point) => point.id === mainPointId);
		if (point) {
			return point.midpoints;
		}
	};

	const setMidpointFinishedByMidpointId = (
		midpointId: string,
		finished: boolean
	) => {
		dispatch(
			roadmapSlice.actions.setMidpointFinishedByPointIdAndMidpointId({
				pointId: mainPointId,
				midpointId,
				finished,
			})
		);
	};

	const deleteMidpointByMidpointId = (midpointId: string) => {
		dispatch(
			roadmapSlice.actions.deleteMidpointByPointId({
				id: mainPointId,
				midpointId,
			})
		);
	};

	return {
		deleteMidpointByMidpointId,
		setMidpointFinishedByMidpointId,
		getMidpoints,
		setMidpoints,
		addMidpoint,
	};
};
