import React from 'react'
import './Pages.css'

const About = () => {
	return (
		<>
			<div class='headerContainer' style={{justifyContent:`center`}}>
				<div class='header1'>
					<img class='headerImg' style={{width:`100vw`, height:`100vh`}} src='./Images/About/me2.jpg'></img>
				</div>
				<div class='nameContainer'>		
				<div class='name' style={{fontSize:`11vw`, zIndex:'100', width:`86vw`}} data-text="I'm Sophia Sun">I'm Sophia Sun</div>
			</div>
			</div>
		</>
	)
}

export default About
