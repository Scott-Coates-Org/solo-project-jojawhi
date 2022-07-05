import styled from 'styled-components';

export const BaseButton = styled.button`
	min-width: 15rem;
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

	&:hover {
		color: #2ec272;
		background-color: #2b2b2b;
	}
`;
