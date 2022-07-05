import { UserLinksContainer } from './user-landing.styles.js';

import { LOGIN_LINK_TYPES } from '../user-link/user-link.component.js';

import UserLoginLink from '../user-link/user-link.component.js';

const UserLanding = () => {
	return (
		<UserLinksContainer>
			<UserLoginLink
				to='/instructor-login'
				label='Instructor'
				linkType={LOGIN_LINK_TYPES.instructor}
			/>
			<UserLoginLink
				to='/student-login'
				label='Student'
				linkType={LOGIN_LINK_TYPES.student}
			/>
		</UserLinksContainer>
	);
};

export default UserLanding;
