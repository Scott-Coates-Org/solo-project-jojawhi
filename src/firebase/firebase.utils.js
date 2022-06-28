import { firebase } from './client';

import 'firebase/auth';

export const auth = firebase.auth();

export const db = firebase.firestore();

export const createAuthUserWithEmailAndPassword = async (email, password, organization) => {
	if (!email || !password) {
		return;
	}

	await auth.createUserWithEmailAndPassword(email, password).then(() => {
		//Add newly authorized user to database with auth token uid as doc id
		db.collection('users').doc(auth.currentUser.uid).set({
			email: email,
			organization: organization,
		});
		console.log(currentUser);
	});
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
	if (!email || !password) {
		return;
	}

	await auth.signInWithEmailAndPassword(email, password).then(() => {
		console.log(auth.currentUser);
	});
};

export const signOutUser = async () => auth.signOut();
