import { Link } from 'react-router-dom';
import { HomePageContainer } from './home-page.styles.js';

const HomePage = () => {
	return (
		<HomePageContainer>
			<h1>Home Page</h1>
			<Link to='/login'>Login</Link>
		</HomePageContainer>
	);
};

export default HomePage;
