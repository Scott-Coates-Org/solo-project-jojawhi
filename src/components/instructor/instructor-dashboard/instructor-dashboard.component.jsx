import Button from 'components/button/button.component';
import { signOutUser } from 'firebase/firebase.utils';

const InstructorDashboard = () => {
	return (
		<div className='instructor-dashboard-container'>
			<h1>Instructor Dashboard</h1>

			<Button onClick={signOutUser}>Sign Out</Button>
		</div>
	);
};

export default InstructorDashboard;
