
   
import React from 'react'
import ParticlesBg from 'particles-bg'
import Card from '../components/Card/Card'
import Card2 from '../components/Card/Card2'
import Card3 from '../components/Card/Card3'

const Portfolio = () => {
	return (
		<div>
			<Card
				header='Chatify'
				body={Chatify}
				date='10/24/2021'
				imgLink='./Images/Portfolio/Chatify.png'
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
				header='Tetros'
				body={Tetros}
				date='07/29/2021'
				imgLink='./Images/Portfolio/tetros.png'
				github='https://github.com/sophiiasun/Tetros'
			/>

			<Card2
				header='Tic Tac Toe'
				body={TicTacToe}
				date='07/29/2021'
				imgLink='./Images/Portfolio/tictactoe.png'
				github='https://github.com/sophiiasun/Tic-Tac-Toe'
			/>

			<Card
				header='vibot'
				body={ViBot}
				date='04/24/2021'
				imgLink='./Images/Portfolio/vibot.png'
				github='https://github.com/sophiiasun/ViBot'
			/>

			<Card2
				header='minesweeper'
				body={Minesweeper}
				date='04/16/2021'
				imgLink='./Images/Portfolio/Minesweeper.png'
				github='https://github.com/sophiiasun/Minesweeper'
			/>

			<Card3
				header='Dominoes'
				body={Dominoes}
				date='06/20/2020'
				imgLink='./Images/Portfolio/dominoes.png'
				github='https://github.com/sophiiasun/Dominoes'
			/>

			<Card
				header='Rock, Paper, Scissors!'
				body={Rock}
				date='06/19/2020'
				imgLink='./Images/Portfolio/rock.png'
				github='https://github.com/sophiiasun/Rock-Paper-Scissors-'
				devpost='https://www.youtube.com/watch?v=49EYVgdUtA0'
			/>

			<Card
				header='Infinite Recharge'
				body={Infinite}
				date='03/22/2020'
				imgLink='./Images/Portfolio/frc.png'
				github='https://github.com/sophiiasun/INFINITE-RECHARGE-2020'
				devpost='https://www.youtube.com/watch?v=gmiYWTmFRVE'
			/>

			<Card
				header='Vex IQ Robotics'
				body={Vex}
				date='11/20/2019'
				imgLink='./Images/Portfolio/abc.png'
				github='https://github.com/sophiiasun/Minesweeper'
				devpost='https://www.youtube.com/watch?v=299XMhfa4Pw'
			/>
		</div>
	)
}

const Chatify = `Chatify was a project developed for a Hackathon (Hack This Fall 2.0). Chatify users discuss 
global issues through socially tough times (e.g. Covid-19 pandemic). Join numerous rooms with different topics, 
or start their own room with a new topic. Built with React, Bootstrap, and Firebase.`

const Medicapp = `Medicapp is aimed to help medical professional to access patients' medical history using 
face-recognition technology. User information is stored using an SQL database hosted by Microsoft Azure. Built 
with Flask, NodeJS, Python, Tailwind, and Vanilla Javascript.`

const Tetros = `Tetros is a recreation of the popular game Tetris by Thomas Wang and Sophia Sun. Our 
version features all the traditional Tetris perks, such as T-spins, points system, 7-block rotations, and more!
Created using basic Vanilla Javascript, CSS, and HTML.`

const TicTacToe = `I created two renditions of the traditional Tic Tac Toe, where you can either play with a 
friend or play against a bot. The bot is programmed with Minimax algorithm, so it will never lose. Built with 
Vanilla javascript, html, and css.`

const Minesweeper = `Minesweeper game created using HTML, Javascript, and CSS. Functions similar 
to that of traditional minesweeper. Left click to expand a tile and right click to mark a tile. Revealed tiles 
represent the number of adjacent (including diagonals) mines, so make sure your brain is on!`

const ViBot = `ViBot was a project created by my team and I during a hackathon called 'YRHacks' in 2021. 
It analyzes a user's message using NLTK Sentiment Analysis software, and was implemented using Discord API with
 Python 3.9. The database is scripted with SQL, hosted by Microsoft Azure.`

const Dominoes = `An interactive Dominoes Game created using Python 3.4. Implements GUI using Tkinter 
 library import and combined several Python source code files. Brute force is used to determine computer 
 playable moves and to determine victories/losses.`

const Infinite = `Participated in FIRST Robotics with High School team (Milliken Silver Knight 7735). 
Designed hardware and scripted software code. Everybot supports both automated movements and remote-controlled. 
Developed using Java 11 and FRC Robotics Research Library.`

const Rock = `An interactive game created using Arduino Uno CPU 2020 Version (scripted in C++). Hardware 
includes LCD display, potentiometer, buzzer, buttons, etc. Tracks the score for player against computer, first 
to five wins.`

const Vex = `A mini-bot built from VEX IQ and coded with VEXcode blocks, using components such as an 
optical sensor, touch LEDs, bumpers, distance sensors, etc. The robot traverses a terrain to pick up and place 
three scattered boxes from start (top left) to finish (bottom right).`

export default Portfolio