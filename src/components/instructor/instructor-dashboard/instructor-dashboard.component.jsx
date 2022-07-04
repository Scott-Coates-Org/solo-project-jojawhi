import Button from 'components/button/button.component';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { createAssessment, saveFile } from 'redux/assessment/assessment';
import { useForm } from 'react-hook-form';
import { FormGroup, Label, Input } from 'reactstrap';
import { Link, Route } from 'react-router-dom';
import AssessmentTable from 'components/table/assessment-table.component';
import SidebarNav from 'components/sidebar-nav/sidebar-nav.component';
import {
	InstructorDashboardContainer,
	BottomContainer,
	ContentContainer,
} from './instructor-dashboard.styles';
import AssessmentPage from 'components/assessment-page/assessment-page.component';

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
		<InstructorDashboardContainer>
			<div className='top-nav-container' style={{ backgroundColor: 'lightblue' }}>
				<p>Top Nav</p>
			</div>
			<BottomContainer>
				<SidebarNav />
				<ContentContainer>
					<Route
						path='/dashboard/assessments'
						render={() => <AssessmentPage />}
					></Route>
					<Route
						path='/dashboard/new-assessment'
						render={() => <NewAssessmentPage />}
					></Route>

					<Link to='/logout'>Sign Out</Link>
				</ContentContainer>
			</BottomContainer>
		</InstructorDashboardContainer>
	);
};

export default InstructorDashboard;
