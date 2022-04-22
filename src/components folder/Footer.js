import React from "react";
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
			<FooterLink href="#">Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Uttar Pradesh</FooterLink>
			<FooterLink href="#">Ahemdabad</FooterLink>
			<FooterLink href="#">Indore</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/Rayzy-web-design-110704334053423/">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				<FacebookIcon />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/no_niche_kicks/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				 <InstagramIcon />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://wa.me/254717441041">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				 <WhatsAppIcon />
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.youtube.com/channel/UCHHCsjWYhit9yUoN7aLkUFg">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				 < YouTubeIcon />
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
