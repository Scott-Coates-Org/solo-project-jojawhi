import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const BaseUserLink = styled(Link)`
	padding: 1rem 2rem;
	font-size: 3rem;
	font-weight: 700;
	background-color: lightgrey;
	border-radius: 10px;
	box-shadow: 0 0 6px 0 #2b2b2b;
	transition: all 300ms;

	&:hover {
		text-decoration: none;
	}
`;

export const InstructorUserLink = styled(BaseUserLink)`
	color: #2b2b2b;
	background-color: lightblue;

	&:hover {
		color: white;
		background-color: darkblue;
	}
`;

export const StudentUserLink = styled(BaseUserLink)`
	color: #2b2b2b;
	background-color: lightgreen;

	&:hover {
		color: white;
		background-color: darkgreen;
	}
`;
