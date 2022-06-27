import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

type userSettingsState = {
	language: string;
	theme: 'dark' | 'light';
	wrapTimeline: boolean;
};

const initialState: userSettingsState = {
	theme: 'dark',
	language: 'en',
	wrapTimeline: false,
};

const userSettingsSlice = createSlice({
	name: 'userSettings',
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<string>) => {
			state.language = action.payload;
		},
		setTheme: (state, action) => {
			state.theme = action.payload;
		},
		toggleWrapTimeline: (state) => {
			state.wrapTimeline = state.wrapTimeline ? false : true;
		},
	},
});

export const userReducer = userSettingsSlice.reducer;

export const useUserSettings = () => {
	const dispatch = useDispatch();

	const { language, theme, wrapTimeline } = useSelector(
		(state: userSettingsState) => state
	);

	const setLanguage = (language: string) => {
		dispatch(userSettingsSlice.actions.setLanguage(language));
	};

	const setTheme = (theme: 'dark' | 'light') => {
		dispatch(userSettingsSlice.actions.setTheme(theme));
	};

	const toggleWrapTimeline = () => {
		dispatch(userSettingsSlice.actions.toggleWrapTimeline());
	};

	return {
		language,
		theme,
		wrapTimeline,
		setLanguage,
		setTheme,
		toggleWrapTimeline,
	};
};
