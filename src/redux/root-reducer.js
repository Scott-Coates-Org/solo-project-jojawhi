import { combineReducers } from 'redux';
import { reducer as user } from './user';

export const rootReducer = combineReducers({
	user,
});
