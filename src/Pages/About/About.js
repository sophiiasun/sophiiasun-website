import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import './About.css'
import ParticlesBg from 'particles-bg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faCalculator, faHeadphones, faGamepad, faLaptop, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSpotify, faDiscord, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
const About = () => {
	return (
		<>
			<div class='headerContainer'>
				<div class='header1'>
					<img class='headerImg' src='./Images/About/me2.jpg'></img>
				</div>
				<div class='nameContainer'>		
				<div class='name' data-text="I'm Sophia Sun">I'm Sophia Sun</div>
			</div>
			</div>
		</>
	)
}

export default About
