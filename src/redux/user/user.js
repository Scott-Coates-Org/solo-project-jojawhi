// https://dev.to/thatgalnatalie/how-to-get-started-with-redux-toolkit-41e
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: {},
	isLoaded: false,
	hasErrors: false,
	errorMsg: {},
};

const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getData: (state) => {},

		getDataSuccess: (state, action) => {
			state.isLoaded = true;
			state.data = action.payload;
		},

		getDataFailure: (state, action) => {
			state.isLoaded = true;
			state.hasErrors = true;
			state.errorMsg = action.payload;
		},
	},
});

export const reducer = user.reducer;

export const { getData, getDataSuccess, getDataFailure } = user.actions;
