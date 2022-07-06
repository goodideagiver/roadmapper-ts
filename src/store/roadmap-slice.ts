import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

type roadmapMidpoint = {
	finished: boolean;
	title: string;
	daysToComplete: number;
};

type roadmapDataPoint = {
	finished: boolean;
	title: string;
	daysToComplete: number;
	midpoints?: roadmapMidpoint[];
};

type roadmapArray = Array<roadmapDataPoint>;

type roadmapState = {
	roadmap: roadmapArray;
	daysDuration: number;
};

const initialState: roadmapState = {
	roadmap: [],
	daysDuration: 0,
};

const roadmapSlice = createSlice({
	name: 'roadmap',
	initialState,
	reducers: {
		setRoadmap: (state, action: PayloadAction<roadmapArray>) => {
			state.roadmap = action.payload;
		},
		setDaysDuration: (state, action: PayloadAction<number>) => {
			state.daysDuration = action.payload;
		},
		addRoadmapPoint: (state, action: PayloadAction<roadmapDataPoint>) => {
			state.roadmap.push(action.payload);
		},
	},
});

export const roadmapReducer = roadmapSlice.reducer;

export const useRoadmap = () => {
	const dispatch = useDispatch();

	const { roadmap, daysDuration } = useSelector((state: roadmapState) => state);

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
		roadmap,
		daysDuration,
		setRoadmap,
		setDaysDuration,
		addRoadmapPoint,
	};
};
