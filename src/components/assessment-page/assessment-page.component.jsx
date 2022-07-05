import AssessmentTable from 'components/table/assessment-table.component';
import { Link } from 'react-router-dom';

const AssessmentPage = () => {
	return (
		<div className='assessment-page-container'>
			<AssessmentTable></AssessmentTable>
			<Link to='/dashboard/new-assessment'>New Assessment</Link>
		</div>
	);
};

export default AssessmentPage;
