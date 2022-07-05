import { FormsContainer } from './instructor-login.styles';
import SignInForm from '../sign-in-form/sign-in-form.component.js';
import SignUpForm from '../sign-up-form/sign-up-form.component.js';

const InstructorLogin = () => {
	return (
		<FormsContainer>
			<SignInForm />
			<SignUpForm />
		</FormsContainer>
	);
};

export default InstructorLogin;
