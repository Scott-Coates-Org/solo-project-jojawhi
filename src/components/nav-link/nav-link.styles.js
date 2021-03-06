import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLinkContainer = styled.div`
	color: white;
`;
export const BaseLink = styled(Link)`
	display: grid;
	grid-template-columns: 15% 85%;
	grid-column-gap: 1rem;
	justify-content: left;
	align-items: baseline;
	padding: 0.5rem;
	font-size: 1rem;
	transition: all 300ms;
	cursor: pointer;

	label {
		cursor: pointer;
	}

	&:hover {
		text-decoration: none;
		color: #2ec272;
		transform: translateX(5px);
	}
`;

export const CollapseLink = styled(BaseLink)`
	font-size: 0.875rem;
	padding: 0 0.5rem;
`;

export const TopNavSmallLink = styled(BaseLink)`
	grid-gap: 0;
	font-size: 1.25rem;
	padding: 0 0.5rem;
	border: none;

	div {
		margin-right: 0;
	}

	&:hover {
		transform: translateY(-3px);
	}
`;
export const TopNavLargeLink = styled(TopNavSmallLink)`
	font-size: 2rem;
`;

export const ButtonLink = styled(BaseLink)`
	grid-template-columns: 10% 90%;
	align-items: center;
	justify-content: center;
	max-width: 15rem;
	margin-bottom: 1rem;
	padding: 0.5rem 1rem;
	color: #2b2b2b;
	background-color: #2ec272;
	text-transform: uppercase;
	font-family: 'Poppins';
	font-size: 1.25rem;
	font-weight: 500;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	box-shadow: 0 0 6px 0 #2b2b2b;
	transition: all 300ms;

	label {
		justify-self: center;
		margin: 0;
		padding: 0;
	}

	&:hover {
		color: #2ec272;
		background-color: #2b2b2b;
		transform: none;
	}
`;
