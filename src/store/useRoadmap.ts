import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { roadmapArray, roadmapSlice, roadmapDataPoint } from './roadmap-slice';

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

	return {
		deleteRoadmapPointById,
		updateRoadmapPoint,
		moveRoadmapPointDown,
		moveRoadmapPointUp,
		mainRoadmapPoints,
		daysDuration,
		setRoadmap,
		setDaysDuration,
		addRoadmapPoint,
	};
};
