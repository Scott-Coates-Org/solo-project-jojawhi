import { combineReducers } from 'redux';
import { reducer as user } from './user/user';
import { reducer as assessment } from './assessment/assessment.js';
import { reducer as widget } from './widget';

export const rootReducer = combineReducers({
	user,
	assessment,
	widget,
});
