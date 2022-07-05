import { AdminCollapseContainer } from './admin-collapse.styles.js';

import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import NavLink, { NAV_LINK_TYPES } from '../../nav-link/nav-link.component.js';

const AdminCollapse = () => {
	return (
		<AdminCollapseContainer>
			<NavLink
				linkType={NAV_LINK_TYPES.base}
				route='/dashboard/profile'
				label='Profile'
				icon={faUser}
			/>
			<NavLink
				linkType={NAV_LINK_TYPES.base}
				route='/logout'
				label='Logout'
				icon={faSignOutAlt}
			/>
		</AdminCollapseContainer>
	);
};

export default AdminCollapse;
