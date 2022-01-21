import React from 'react'
import Card from '../../components/Card/Card'
import Card2 from '../../components/Card/Card2'
import { Chatify, Medicapp, Tetros, Minesweeper } from './PortfolioElements'

const Portfolio = () => {
	return (
		<div>
			{/* <button className="resumeButton"><a href="https://bit.ly/3ll8fpY">View Resume</a></button> */}
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
				imgLink='./Images/Portfolio/MedicApp.jpg'
				github='https://github.com/sophiiasun/HTN'
				devpost='https://devpost.com/software/medicapp-yd2rwc'
			/>

			<Card2
				header='minesweeper'
				body={Minesweeper}
				date='04/16/2021'
				imgLink='./Images/Portfolio/Minesweeper.png'
				github='https://github.com/sophiiasun/Minesweeper'

			/>

		</div>
	)
}



export default Portfolio
