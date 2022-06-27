import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user-settings-slice';

export const store = configureStore({
	reducer: {
		userSettings: userReducer,
	},
});
