import React from "react";
import {
Box,
Container,
Row,
FooterLink,
} from "./Footer.styles";

const Footer = () => {
return (
	<Box>
		
	<Container>
		<Row>
			<FooterLink href="/privacy" target="_blank">Privacy</FooterLink>
			<FooterLink href="https://www.youtube.com/channel/UCOucirUoQDGBuea1Q0xuwPw" target="_blank">Animals Youtube Channel</FooterLink>
			<FooterLink href="https://itch.io/search?q=tcbacon"  target="_blank">Games Created</FooterLink>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
