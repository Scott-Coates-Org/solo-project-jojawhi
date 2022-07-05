import FormInput from '../form-input/form-input.component.js';
import Button from 'components/button/button.component.js';
import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocFromAuthUser,
	signUpNewUser,
} from 'firebase/firebase.utils.js';

const SignUpForm = () => {
	const defaultFormFields = {
		email: '',
		organization: '',
		password: '',
		confirmPassword: '',
	};

	const [formFields, setFormFields] = useState(defaultFormFields);

	const { email, organization, password, confirmPassword } = formFields;

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('Passwords do not match!');
			return;
		}

		try {
			createAuthUserWithEmailAndPassword(email, password, organization);

			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user. Email already in use.');
			} else {
				console.log('Could not create user', error.message);
			}
		}
	};

	return (
		<div className='sign-in-container'>
			<h2 className='sign-in-heading'>Sign in with your email and password.</h2>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='text'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>
				<FormInput
					label='Organization'
					type='text'
					required
					onChange={handleChange}
					name='organization'
					value={organization}
				/>
				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<FormInput
					label='Confirm Password'
					type='password'
					required
					onChange={handleChange}
					name='confirmPassword'
					value={confirmPassword}
				/>
				<Button>Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
