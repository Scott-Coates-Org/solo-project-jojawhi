import {
	TopNavContainer,
	LogoContainer,
	TopNavButtonsContainer,
	TextLogo,
} from './top-nav.styles.js';
import { faQuestionCircle, faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import NavLink, { NAV_LINK_TYPES } from '../nav-link/nav-link.component.js';
import NavButton, { NAV_BUTTON_TYPES } from '../nav-button/nav-button.component.js';
import AdminCollapse from '../instructor/admin-collapse/admin-collapse.component.js';
import { useState } from 'react';

const TopNav = () => {
	const [adminCollapseIsOpen, setAdminCollapseIsOpen] = useState(false);

	return (
		<TopNavContainer>
			<LogoContainer>
				<TextLogo>PELA</TextLogo>
			</LogoContainer>
			<TopNavButtonsContainer>
				<NavLink
					linkType={NAV_LINK_TYPES.topNavSmall}
					route='/dashboard/notifications'
					icon={faBell}
				/>
				<NavLink
					linkType={NAV_LINK_TYPES.topNavSmall}
					route='/dashboard/help'
					icon={faQuestionCircle}
				/>
				<NavButton
					buttonType={NAV_BUTTON_TYPES.topNavLarge}
					icon={faUserCircle}
					onClick={() => setAdminCollapseIsOpen(!adminCollapseIsOpen)}
				/>
				{adminCollapseIsOpen && <AdminCollapse></AdminCollapse>}
			</TopNavButtonsContainer>
		</TopNavContainer>
	);
};

export default TopNav;
