import { UserLinksContainer } from './user-landing.styles';

import { LOGIN_LINK_TYPES } from '../user-link/user-link.component';

import UserLoginLink from '../user-link/user-link.component';

const UserLanding = () => {
	return (
		<UserLinksContainer>
			<UserLoginLink
				to='/instructor-login'
				label='Instructor'
				linkType={LOGIN_LINK_TYPES.instructor}
			></UserLoginLink>
			<UserLoginLink
				to='/login'
				label='Student'
				linkType={LOGIN_LINK_TYPES.student}
			></UserLoginLink>
		</UserLinksContainer>
	);
};

export default UserLanding;
