// https://dev.to/thatgalnatalie/how-to-get-started-with-redux-toolkit-41e

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import firebaseClient from 'firebase/client';

const initialState = {
	data: {},
	isLoaded: false,
	hasErrors: false,
	errorMsg: {},
};

const assessment = createSlice({
	name: 'assessment',
	initialState,
	reducers: {
		getData: (state) => {
			console.log(state);
		},

		getDataSuccess: (state, action) => {
			state.isLoaded = true;
			state.data = action.payload;
		},

		getDataFailure: (state, action) => {
			state.isLoaded = true;
			state.hasErrors = true;
			state.errorMsg = action.payload;
		},

		createDataFailure: (state) => {
			state.hasErrors = true;
			state.errorMsg = action.payload;
		},
	},
});

export const reducer = assessment.reducer;

export const { getData, getDataSuccess, getDataFailure, createDataFailure } = assessment.actions;

export const fetchAllAssessments = createAsyncThunk(
	'assessment/fetchAllAssessments',
	async (_, thunkAPI) => {
		// Set the loading state to true
		thunkAPI.dispatch(getData());

		try {
			const data = await _fetchAllAssessmentsFromDb();
			thunkAPI.dispatch(getDataSuccess(data));
		} catch (error) {
			console.error('error', error);
			// Set any erros while trying to fetch
			thunkAPI.dispatch(getDataFailure(error));
		}
	}
);

export const createAssessment = createAsyncThunk(
	'assessment/createAssessment',
	async (payload, thunkAPI) => {
		try {
			await _createAssessment(
				payload.skill,
				payload.taskType,
				payload.isSuccessful,
				payload.file
			);
		} catch (error) {
			console.error('error', error);
			// Set any erros while trying to fetch
			thunkAPI.dispatch(createDataFailure());
		}
	}
);

export const saveFile = createAsyncThunk('assessment/saveFile', async (payload) => {
	const file = payload.file;

	try {
		const fileName = _appendToFilename(file.name, '_' + Date.now());
		const uploadTask = _updloadFile(fileName, file);

		const uploadPromise = new Promise((resolve, reject) => {
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) *
						100;
					console.log('progress:', progress);
				},
				(error) => {
					reject(error);
				},
				() => {
					uploadTask.snapshot.ref
						.getDownloadURL()
						.then((downloadURL) => resolve(downloadURL))
						.catch(reject);
				}
			);
		});

		const downloadURL = await uploadPromise;

		return downloadURL;
	} catch (error) {
		alert('Error saving file: ' + JSON.stringify(error));
	}
});

async function _fetchAllAssessmentsFromDb() {
	const snapshot = await firebaseClient.firestore().collection('assessments').get();

	const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

	return data;
}

async function _createAssessment(skill, taskType, isSuccessful, file) {
	const doc = await firebaseClient
		.firestore()
		.collection('assessments')
		.add({ skill, taskType, isSuccessful, file });

	return doc;
}

// https://stackoverflow.com/a/31205878/173957
function _appendToFilename(filename, string) {
	var dotIndex = filename.lastIndexOf('.');
	if (dotIndex == -1) return filename + string;
	else return filename.substring(0, dotIndex) + string + filename.substring(dotIndex);
}

function _updloadFile(fileName, file) {
	const uploadTask = firebaseClient.storage().ref(`/${fileName}`).put(file);

	return uploadTask;
}
