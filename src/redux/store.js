// https://dev.to/thatgalnatalie/how-to-get-started-with-redux-toolkit-41e
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';

const store = configureStore({
	reducer: rootReducer,
});

export default store;
