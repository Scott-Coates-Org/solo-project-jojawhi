import { Link, Route } from 'react-router-dom';
import SidebarNav from 'components/sidebar-nav/sidebar-nav.component';
import {
	InstructorDashboardContainer,
	BottomContainer,
	ContentContainer,
} from './instructor-dashboard.styles';
import AssessmentPage from 'components/assessment-page/assessment-page.component';
import NewAssessmentPage from 'components/new-assessment-page/new-assessment-page.component';
import TopNav from 'components/top-nav/top-nav.component';

const InstructorDashboard = () => {
	return (
		<InstructorDashboardContainer>
			<TopNav />
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
