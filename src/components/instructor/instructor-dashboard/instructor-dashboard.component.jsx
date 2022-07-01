import Button from 'components/button/button.component';
import { signOutUser } from 'firebase/firebase.utils';
import FileInput from 'components/file-input/file-input.component';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createAssessment, fetchAllAssessments, saveFile } from 'redux/assessment/assessment';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const InstructorDashboard = () => {
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	// dispatch async thunks are promises
	// 	// https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions

	// 	dispatch(fetchAllAssessments());
	// }, [dispatch]);

	const { data, isLoaded, hasErrors } = useSelector((state) => state.assessment);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const { ref: fileRef, ...fileRest } = register('file', { required: true });

	const onSubmit = (data) => {
		if (Object.keys(errors).length) {
			alert('Error saving assessment: ' + JSON.stringify(errors));
		} else {
			dispatch(saveFile({ file: data.file[0] })).then((action) => {
				const fileURL = action.payload;
				if (fileURL) {
					dispatch(
						createAssessment({
							file: fileURL,
						})
					).then(() => {
						reset();
						dispatch(fetchAllAssessments());
					});
				}
			});
		}
	};

	return (
		<div className='instructor-dashboard-container'>
			<h1>Instructor Dashboard</h1>
			<form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
				<FormGroup>
					<Label for='file'>Upload Assessment</Label>
					<Input
						id='file'
						type='file'
						accept='.pdf, .doc, .docx, application/msword'
						{...fileRest}
						innerRef={fileRef}
						invalid={errors.file}
					/>
				</FormGroup>

				<Button type='submit'>Upload</Button>
			</form>
			<Button onClick={signOutUser}>Sign Out</Button>
		</div>
	);
};

export default InstructorDashboard;
