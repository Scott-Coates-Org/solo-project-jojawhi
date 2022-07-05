import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	NavLinkContainer,
	BaseLink,
	CollapseLink,
	TopNavSmallLink,
	TopNavLargeLink,
	ButtonLink,
} from './nav-link.styles';

export const NAV_LINK_TYPES = {
	base: 'base',
	collapse: 'collapse',
	topNavSmall: 'topNavSmall',
	topNavLarge: 'topNavLarge',
	buttonLink: 'buttonLink',
};

const getLinkType = (linkType = NAV_LINK_TYPES.base) => {
	return {
		[NAV_LINK_TYPES.base]: BaseLink,
		[NAV_LINK_TYPES.collapse]: CollapseLink,
		[NAV_LINK_TYPES.topNavSmall]: TopNavSmallLink,
		[NAV_LINK_TYPES.topNavLarge]: TopNavLargeLink,
		[NAV_LINK_TYPES.buttonLink]: ButtonLink,
	}[linkType];
};

const NavLink = ({ linkType, route, label = null, icon = null }) => {
	const CustomLink = getLinkType(linkType);

	return (
		<NavLinkContainer>
			<CustomLink to={route}>
				{icon && <FontAwesomeIcon icon={icon} />}

				{label && <label>{label}</label>}
			</CustomLink>
		</NavLinkContainer>
	);
};

export default NavLink;
