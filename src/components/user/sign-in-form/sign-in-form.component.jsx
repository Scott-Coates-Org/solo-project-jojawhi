import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import Button from 'components/button/button.component';

import { signInAuthWithEmailAndPassword } from 'firebase/firebase.utils';

const SignInForm = () => {
	const defaultFormFields = {
		email: '',
		password: '',
	};

	const [formFields, setFormFields] = useState(defaultFormFields);

	const { email, password } = formFields;

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await signInAuthWithEmailAndPassword(email, password);
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('Wrong password.');
					break;
				case 'auth/user-not-found':
					alert('Wrong email.');
					break;
				default:
					console.log(error.message);
			}
		}

		resetFormFields();
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
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>
				<Button>Sign In</Button>
			</form>
		</div>
	);
};

export default SignInForm;
