import AssessmentTable from '../table/assessment-table.component.js';
import NavLink, { NAV_LINK_TYPES } from '../../nav-link/nav-link.component.js';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AssessmentPage = () => {
	return (
		<div className='assessment-page-container'>
			<AssessmentTable></AssessmentTable>
			<NavLink
				linkType={NAV_LINK_TYPES.buttonLink}
				route='/dashboard/new-assessment'
				label='New Assessment'
				icon={faPlus}
			></NavLink>
		</div>
	);
};

export default AssessmentPage;
