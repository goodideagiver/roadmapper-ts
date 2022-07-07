import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';

type roadmapMidpoint = {
	finished: boolean;
	title: string;
	daysToComplete: number;
};

type roadmapDataPoint = {
	id: string;
	finished: boolean;
	title: string;
	daysToComplete: number;
	midpoints?: roadmapMidpoint[];
};

type roadmapArray = Array<roadmapDataPoint>;

type roadmapState = {
	mainRoadmapPoints: roadmapArray;
	daysDuration: number;
};

const initialState: roadmapState = {
	mainRoadmapPoints: [],
	daysDuration: 0,
};

const roadmapSlice = createSlice({
	name: 'roadmap',
	initialState,
	reducers: {
		setRoadmap: (state, action: PayloadAction<roadmapArray>) => {
			state.mainRoadmapPoints = action.payload;
		},
		setDaysDuration: (state, action: PayloadAction<number>) => {
			state.daysDuration = action.payload;
		},
		addRoadmapPoint: (state, action: PayloadAction<roadmapDataPoint>) => {
			state.mainRoadmapPoints.push(action.payload);
		},
	},
});

export const roadmapReducer = roadmapSlice.reducer;

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

	return {
		mainRoadmapPoints,
		daysDuration,
		setRoadmap,
		setDaysDuration,
		addRoadmapPoint,
	};
};
