import { BaseUserLink, InstructorUserLink, StudentUserLink } from './user-link.styles.js';

export const LOGIN_LINK_TYPES = {
	base: 'base',
	instructor: 'instructor',
	student: 'student',
};

const getLinkType = (linkType = LOGIN_LINK_TYPES.base) => {
	return {
		[LOGIN_LINK_TYPES.base]: BaseUserLink,
		[LOGIN_LINK_TYPES.instructor]: InstructorUserLink,
		[LOGIN_LINK_TYPES.student]: StudentUserLink,
	}[linkType];
};

const UserLoginLink = ({ label, linkType, ...otherProps }) => {
	const CustomLink = getLinkType(linkType);

	return <CustomLink {...otherProps}>{label}</CustomLink>;
};

export default UserLoginLink;
