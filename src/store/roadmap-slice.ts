import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

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

export type roadmapArray = Array<roadmapDataPoint>;

type roadmapState = {
	mainRoadmapPoints: roadmapArray;
	daysDuration: number;
};

const initialState: roadmapState = {
	mainRoadmapPoints: [],
	daysDuration: 0,
};

export const roadmapSlice = createSlice({
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
			const index = state.mainRoadmapPoints.findIndex(
				(point) => point.id === action.payload.id
			);

			if (index > -1) {
				state.mainRoadmapPoints[index] = action.payload;
			}
		},
		changeOrderUp: (state, action: PayloadAction<string>) => {
			const index = state.mainRoadmapPoints.findIndex(
				(point) => point.id === action.payload
			);
			if (
				index >= 0 &&
				state.mainRoadmapPoints.length > 1 &&
				index !== state.mainRoadmapPoints.length - 1
			) {
				const temp = state.mainRoadmapPoints[index];
				state.mainRoadmapPoints[index] = state.mainRoadmapPoints[index + 1];
				state.mainRoadmapPoints[index + 1] = temp;
			}
		},
		deleteMidpointByPointId: (
			state,
			action: PayloadAction<{ id: string; midpointId: string }>
		) => {
			const point = state.mainRoadmapPoints.find(
				(point) => point.id === action.payload.id
			);

			if (point && point.midpoints) {
				point.midpoints = point.midpoints.filter(
					(midpoint) => midpoint.id !== action.payload.midpointId
				);
			}
		},
		changeOrderDown: (state, action: PayloadAction<string>) => {
			const index = state.mainRoadmapPoints.findIndex(
				(point) => point.id === action.payload
			);
			if (index > 0 && state.mainRoadmapPoints.length > 1) {
				const temp = state.mainRoadmapPoints[index];
				state.mainRoadmapPoints[index] = state.mainRoadmapPoints[index - 1];
				state.mainRoadmapPoints[index - 1] = temp;
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

				const allDaysInMidpoints = existingPoint.midpoints.reduce(
					(acc, midpoint) => acc + midpoint.daysToComplete,
					0
				);

				if (allDaysInMidpoints > existingPoint.daysToComplete) {
					existingPoint.daysToComplete = allDaysInMidpoints;
				}
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
		setMidpointFinishedByPointIdAndMidpointId: (
			state,
			action: PayloadAction<{
				pointId: string;
				midpointId: string;
				finished: boolean;
			}>
		) => {
			const existingPoint = state.mainRoadmapPoints.find(
				(point) => point.id === action.payload.pointId
			);

			if (existingPoint) {
				const existingMidpoint = existingPoint?.midpoints?.find(
					(midpoint) => midpoint.id === action.payload.midpointId
				);

				if (existingMidpoint) {
					existingMidpoint.finished = action.payload.finished;
				}
			}
		},
		editMidpointByPointIdAndMidpointId: (
			state,
			action: PayloadAction<{
				pointId: string;
				midpointId: string;
				midpoint: roadmapMidpoint;
			}>
		) => {
			const existingPoint = state.mainRoadmapPoints.find(
				(point) => point.id === action.payload.pointId
			);

			if (existingPoint) {
				const existingMidpoint = existingPoint?.midpoints?.find(
					(midpoint) => midpoint.id === action.payload.midpointId
				);

				if (existingMidpoint) {
					existingMidpoint.title = action.payload.midpoint.title;
					existingMidpoint.finished = action.payload.midpoint.finished;
					existingMidpoint.daysToComplete =
						action.payload.midpoint.daysToComplete;
				}
			}
		},
	},
});

export const roadmapReducer = roadmapSlice.reducer;
