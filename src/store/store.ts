import { configureStore } from '@reduxjs/toolkit';
import { roadmapReducer } from './roadmap-slice';
import { userReducer } from './user-settings-slice';

export const store = configureStore({
	reducer: {
		userSettings: userReducer,
		roadmap: roadmapReducer,
	},
});
