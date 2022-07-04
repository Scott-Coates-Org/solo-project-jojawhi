const NewAssessmentPage = () => {
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
