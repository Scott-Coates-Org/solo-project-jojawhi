import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createAssessment, saveFile } from 'redux/assessment/assessment.js';
import { useForm } from 'react-hook-form';
import { FormGroup, Label, Input } from 'reactstrap';
import Button from '../../button/button.component.js';

const NewAssessmentPage = () => {
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

	const { ref: skillRef, ...skillRest } = register('skill', { required: true });
	const { ref: taskTypeRef, ...taskTypeRest } = register('taskType', { required: true });
	const { ref: isSuccessfulRef, ...isSuccessfulRest } = register('isSuccessful', {
		required: true,
	});
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
							skill: data.skill,
							taskType: data.taskType,
							isSuccessful: data.isSuccessful,
							file: fileURL,
						})
					).then(() => {
						reset();
						// dispatch(fetchAllAssessments());
					});
				}
			});
		}
	};

	return (
		<div className='new-assessment-page-container'>
			<h1>New Assessment</h1>
			<div className='form-container' style={{ padding: '1rem' }}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					encType='multipart/form-data'
				>
					<FormGroup>
						<Label for='skill'>Skill</Label>
						<Input
							id='skill'
							type='select'
							{...skillRest}
							innerRef={skillRef}
							invalid={errors.skill}
						>
							<option value='listening'>Listening</option>
							<option value='speaking'>Speaking</option>
							<option value='reading'>Reading</option>
							<option value='writing'>Writing</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for='taskType'>Task Type</Label>
						<Input
							id='taskType'
							type='select'
							{...taskTypeRest}
							innerRef={taskTypeRef}
							invalid={errors.taskType}
						>
							<option value='skillUsingTask'>
								Skill Using Task
							</option>
							<option value='assessmentTask'>
								Assessment Task
							</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for='isSuccessful'>Successful</Label>
						<Input
							id='isSuccessful'
							type='checkbox'
							{...isSuccessfulRest}
							innerRef={isSuccessfulRef}
							invalid={errors.isSuccessful}
						/>
					</FormGroup>
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
			</div>
		</div>
	);
};

export default NewAssessmentPage;
