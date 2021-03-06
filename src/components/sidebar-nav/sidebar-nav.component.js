import { faHome, faBookOpen, faUserFriends, faFileAlt } from '@fortawesome/free-solid-svg-icons';

import NavLink from '../nav-link/nav-link.component.js';

// import { adminRoutes } from '../dashboard/Dashboard'
import { SidebarNavContainer } from './sidebar-nav.styles';

const SidebarNav = () => {
	return (
		<SidebarNavContainer>
			<NavLink route='/dashboard/home' label='HOME' icon={faHome}></NavLink>

			<NavLink
				route='/dashboard/classes'
				label='CLASSES'
				icon={faBookOpen}
			></NavLink>

			<NavLink
				route='/dashboard/students'
				label='STUDENTS'
				icon={faUserFriends}
			></NavLink>

			<NavLink
				route='/dashboard/assessments'
				label='ASSESSMENTS'
				icon={faFileAlt}
			></NavLink>
		</SidebarNavContainer>
	);
};

export default SidebarNav;
