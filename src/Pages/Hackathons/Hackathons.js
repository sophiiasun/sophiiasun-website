import React from 'react'
import Card from '../../components/Card/Card'
import { Chatify, Medicapp, Tetros } from './HackathonsElements'

const Portfolio = () => {
	return (
		<div>
			<button className="resumeButton"><a href="https://bit.ly/3ll8fpY">View Resume</a></button>

			<Card
				header='Chatify'
				body={Chatify}
				date='10/24/2021'
				github='https://github.com/sophiiasun/Chatify'
				devpost='https://devpost.com/software/chatify-42wgsp'
			/>

			<Card
				header='medicap'
				body={Medicapp}
				date='09/19/2021'
				imgLink='./Personal-Site/ProjectImg/MedicApp.jpg'
				github='https://github.com/sophiiasun/HTN'
				devpost='https://devpost.com/software/medicapp-yd2rwc'
			/>
		</div>
	)
}

export default Portfolio
