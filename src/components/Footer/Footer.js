import React from "react"
import { Foot, FootMenu } from './FooterElements'
import logo from './logo.png'
import '../../components/Components.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify, faDiscord, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"

const Footer = () => (
	<>
		<Foot> 
			<FootMenu>
				<div class='container1' style={{marginRight:'10vw'}}><div class='header'>Let's Connect!</div></div>
				<a href='https://www.instagram.com/sophii.asun/'><FontAwesomeIcon icon={faInstagram} className="icons" style={{margin:"0 1vw"}}/></a>
				<a href="https://open.spotify.com/user/0xom5vjwl5vd1g8vtuzjrkcx5"><FontAwesomeIcon icon={faSpotify} className="icons" style={{margin:"0 1vw"}}/></a>
				<a href="https://github.com/sophiiasun"><FontAwesomeIcon icon={faGithub} className="icons" style={{margin:"0 1vw"}}/></a>
				<a href="https://www.linkedin.com/in/sophia-sun-781907193/"><FontAwesomeIcon icon={faLinkedin} className="icons" style={{margin:"0 1vw"}}/></a>
				<a id='email'><FontAwesomeIcon icon={faEnvelopeSquare} className="icons" style={{margin:"0 1vw"}}/></a>
				<a id='discord'><FontAwesomeIcon icon={faDiscord} className="icons"  style={{margin:"0 1vw"}}/></a>
				<p class="discUser" id="discUser">sophii.asun#6432</p>
				<p class="email" id="email">sxphia.sxn@gmail.com</p>
			</FootMenu>
		</Foot> 
	</>
);

export default Footer;