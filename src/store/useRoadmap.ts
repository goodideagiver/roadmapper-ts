import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import {
	roadmapArray,
	roadmapSlice,
	roadmapDataPoint,
	roadmapMidpoint,
} from './roadmap-slice';

export const useRoadmap = () => {
	const dispatch = useDispatch();

	const { mainRoadmapPoints, daysDuration } = useSelector(
		(state: RootState) => state.roadmap
	);

	const setRoadmap = (roadmap: roadmapArray) => {
		dispatch(roadmapSlice.actions.setRoadmap(roadmap));
	};

	const setDaysDuration = (daysDuration: number) => {
		dispatch(roadmapSlice.actions.setDaysDuration(daysDuration));
	};

	const addRoadmapPoint = (roadmapPoint: roadmapDataPoint) => {
		dispatch(roadmapSlice.actions.addRoadmapPoint(roadmapPoint));
	};

	const addMidpointById = (id: string, midpoint: roadmapMidpoint) => {
		dispatch(
			roadmapSlice.actions.addMidpointByPointId({ pointId: id, midpoint })
		);
	};

	const setMidpointsByPointId = (id: string, midpoints: roadmapMidpoint[]) => {
		dispatch(
			roadmapSlice.actions.setMidpointsByPointId({ pointId: id, midpoints })
		);
	};

	const getMidpointsByPointId = (id: string) => {
		const point = mainRoadmapPoints.find((point) => point.id === id);
		if (point) {
			return point.midpoints;
		}
	};

	const setMidpointFinishedByPointIdAndMidpointId = (
		id: string,
		midpointId: string,
		finished: boolean
	) => {
		dispatch(
			roadmapSlice.actions.setMidpointFinishedByPointIdAndMidpointId({
				pointId: id,
				midpointId,
				finished,
			})
		);
	};

	const moveRoadmapPointUp = (id: string) => {
		dispatch(roadmapSlice.actions.changeOrderUp(id));
	};

	const moveRoadmapPointDown = (id: string) => {
		dispatch(roadmapSlice.actions.changeOrderDown(id));
	};

	const updateRoadmapPoint = (point: roadmapDataPoint) => {
		dispatch(roadmapSlice.actions.updateRoadmapPoint(point));
	};

	const deleteRoadmapPointById = (id: string) => {
		dispatch(roadmapSlice.actions.removeRoadmapPoint(id));
	};

	const deleteMidpointByPointAndMidpointId = (
		id: string,
		midpointId: string
	) => {
		dispatch(roadmapSlice.actions.deleteMidpointByPointId({ id, midpointId }));
	};

	return {
		deleteMidpointByPointAndMidpointId,
		deleteRoadmapPointById,
		updateRoadmapPoint,
		moveRoadmapPointDown,
		moveRoadmapPointUp,
		setMidpointFinishedByPointIdAndMidpointId,
		getMidpointsByPointId,
		setMidpointsByPointId,
		addMidpointById,
		mainRoadmapPoints,
		daysDuration,
		setRoadmap,
		setDaysDuration,
		addRoadmapPoint,
	};
};
