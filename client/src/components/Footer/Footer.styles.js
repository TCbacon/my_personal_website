import styled from 'styled-components';

export const Box = styled.div`
	border-radius: 20px;
	background: black;
	bottom: 0;
	width: 100%;
	padding: 15px 0px;

	@media (max-width: 1000px) {
		padding: 10px 0px;
	}
`;

export const Container = styled.div`

	justify-content: center;
	max-width: 1000px;
	margin-left: 0;
	
`

export const Row = styled.div`
	display: flex;
	padding-left: 20px;
`;

export const FooterLink = styled.a`
	padding-right: 50px;
	color: #fff;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		color: yellow;
		transition: 200ms ease-in;
	}
	@media only screen and (max-width:500px){
		font-size: 10px;
		padding-right: 10px;
}
`;

export const Heading = styled.p`
	font-size: 24px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;
