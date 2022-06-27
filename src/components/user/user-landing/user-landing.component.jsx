import { Link } from 'react-router-dom';

const UserLanding = () => {
	return (
		<div className='user-links-container'>
			<Link to='/login'>Instructor</Link>
			<Link to='/login'>Student</Link>
		</div>
	);
};

export default UserLanding;
