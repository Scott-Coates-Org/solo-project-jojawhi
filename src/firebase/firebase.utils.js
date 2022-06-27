import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import client from './client';

export const auth = getAuth();

export const db = getFirestore(client);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) {
		return;
	}

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithUserAndPassword = async (email, password) => {
	if (!email || !password) {
		return;
	}

	return await signInWithEmailAndPassword(auth, email, password);
};

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
	const userDocRef = doc(db, 'users', userAuth, uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	} else {
		return userDocRef;
	}
};

export const signOutUser = async () => signOut(auth);
