import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';

export type roadmapMidpoint = {
	finished: boolean;
	title: string;
	daysToComplete: number;
	id: string;
};

export type roadmapDataPoint = {
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
		removeRoadmapPoint: (state, action: PayloadAction<string>) => {
			state.mainRoadmapPoints = state.mainRoadmapPoints.filter(
				(point) => point.id !== action.payload
			);
		},
		updateRoadmapPoint: (state, action: PayloadAction<roadmapDataPoint>) => {
			state.mainRoadmapPoints = state.mainRoadmapPoints.map((point) => {
				if (point.id === action.payload.id) {
					return action.payload;
				}
				return point;
			});
		},
		changeOrderUp: (state, action: PayloadAction<string>) => {
			const index = state.mainRoadmapPoints.findIndex(
				(point) => point.id === action.payload
			);
			if (index > 0) {
				const temp = state.mainRoadmapPoints[index];
				state.mainRoadmapPoints[index] = state.mainRoadmapPoints[index - 1];
				state.mainRoadmapPoints[index - 1] = temp;
			}
		},
		changeOrderDown: (state, action: PayloadAction<string>) => {
			const index = state.mainRoadmapPoints.findIndex(
				(point) => point.id === action.payload
			);
			if (index < state.mainRoadmapPoints.length - 1) {
				const temp = state.mainRoadmapPoints[index];
				state.mainRoadmapPoints[index] = state.mainRoadmapPoints[index + 1];
				state.mainRoadmapPoints[index + 1] = temp;
			}
		},
		addMidpointByPointId: (
			state,
			action: PayloadAction<{
				pointId: string;
				midpoint: roadmapMidpoint;
			}>
		) => {
			const existingPoint = state.mainRoadmapPoints.find(
				(point) => point.id === action.payload.pointId
			);

			if (existingPoint) {
				if (!existingPoint.midpoints) {
					existingPoint.midpoints = [];
				}

				existingPoint.midpoints.push(action.payload.midpoint);
			}
		},
		setMidpointsByPointId: (
			state,
			action: PayloadAction<{
				pointId: string;
				midpoints: roadmapMidpoint[];
			}>
		) => {
			const existingPoint = state.mainRoadmapPoints.find(
				(point) => point.id === action.payload.pointId
			);

			if (existingPoint) {
				existingPoint.midpoints = action.payload.midpoints;
			}
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

	return {
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
