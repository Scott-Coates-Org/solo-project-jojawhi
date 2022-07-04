import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div className='home-page-container'>
			<h1>Home Page</h1>
			<Link to='/login-type'>Login</Link>
		</div>
	);
};

export default HomePage;
