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
				<div class='header'>
					<img class='headerImg' src='./my personal website/Images/About/me2.jpg'>
					</img>
				</div>
				<div class='header'>
					I'm Sophia Sun
				</div>
			</div>
		</>
	)
}

export default About
