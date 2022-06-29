import Button from 'components/button/button.component';
import { signOutUser } from 'firebase/firebase.utils';
import FileInput from 'components/file-input/file-input.component';

const InstructorDashboard = () => {
	const handleChange = (event) => {
		event.preventDefault();

		console.log('changed');
	};

	return (
		<div className='instructor-dashboard-container'>
			<h1>Instructor Dashboard</h1>
			<form>
				<FileInput
					label='Upload Assessment'
					type='file'
					accept='.doc, .docx, application/msword, .pdf'
					name='file'
					onChange={handleChange}
					value=''
				/>
				<Button>Upload</Button>
			</form>
			<Button onClick={signOutUser}>Sign Out</Button>
		</div>
	);
};

export default InstructorDashboard;
