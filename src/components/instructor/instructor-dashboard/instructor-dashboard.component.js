import { Route } from 'react-router-dom';
import SidebarNav from 'components/sidebar-nav/sidebar-nav.component';
import {
	InstructorDashboardContainer,
	BottomContainer,
	ContentContainer,
} from './instructor-dashboard.styles';
import AssessmentPage from '../assessment-page/assessment-page.component';
import NewAssessmentPage from '../new-assessment-page/new-assessment-page.component';
import TopNav from '../../top-nav/top-nav.component';
import DashboardHome from '../dashboard-home/dashboard-home.component';

const InstructorDashboard = () => {
	return (
		<InstructorDashboardContainer>
			<TopNav></TopNav>
			<BottomContainer>
				<SidebarNav></SidebarNav>
				<ContentContainer>
					<Route
						path='/dashboard/home'
						render={() => <DashboardHome />}
					></Route>
					<Route
						path='/dashboard/classes'
						render={() => <DashboardHome />}
					></Route>
					<Route
						path='/dashboard/assessments'
						render={() => <AssessmentPage />}
					></Route>
					<Route
						path='/dashboard/new-assessment'
						render={() => <NewAssessmentPage />}
					></Route>
				</ContentContainer>
			</BottomContainer>
		</InstructorDashboardContainer>
	);
};

export default InstructorDashboard;
