import React from 'react'
import Card from '../../components/Card/Card'
import Card2 from '../../components/Card/Card2'
import { Chatify, Medicapp, Tetros, Minesweeper, ViBot, Dominoes, Infinite, Rock, Vex } from './PortfolioElements'

const Portfolio = () => {
	return (
		<div>
			{/* <button className="resumeButton"><a href="https://bit.ly/3ll8fpY">View Resume</a></button> */}
			<Card
				header='Chatify'
				body={Chatify}
				date='10/24/2021'
				imgLink='./Images/Portfolio/MedicApp.jpg'
				github='https://github.com/sophiiasun/Chatify'
				devpost='https://devpost.com/software/chatify-42wgsp'
			/>
			
			<Card 
				header='medicap'
				body={Medicapp}
				date='09/19/2021'
				imgLink='./sophiiasun-website/Images/Portfolio/MedicApp.jpg'
				github='https://github.com/sophiiasun/HTN'
				devpost='https://devpost.com/software/medicapp-yd2rwc'
			/>

			<Card
				header='vibot'
				body={ViBot}
				date='04/24/2021'
				imgLink='./Images/Portfolio/Minesweeper.png'
				github='https://github.com/sophiiasun/Minesweeper'
			/>

			<Card2
				header='minesweeper'
				body={Minesweeper}
				date='04/16/2021'
				imgLink='./Images/Portfolio/Minesweeper.png'
				github='https://github.com/sophiiasun/Minesweeper'
			/>

			<Card
				header='Dominoes'
				body={Dominoes}
				date='06/20/2020'
				imgLink='./Images/Portfolio/Minesweeper.png'
				github='https://github.com/sophiiasun/Minesweeper'
			/>

			<Card
				header='Rock, Paper, Scissors!'
				body={Rock}
				date='06/19/2020'
				imgLink='./Images/Portfolio/Minesweeper.png'
				github='https://github.com/sophiiasun/Minesweeper'
			/>

			<Card
				header='Infinite Recharge'
				body={Infinite}
				date='03/22/2020'
				imgLink='./Images/Portfolio/Minesweeper.png'
				github='https://github.com/sophiiasun/Minesweeper'
			/>

			<Card
				header='Vex IQ Robotics'
				body={Vex}
				date='11/20/2019'
				imgLink='./Images/Portfolio/Minesweeper.png'
				github='https://github.com/sophiiasun/Minesweeper'
			/>

		</div>
	)
}



export default Portfolio
