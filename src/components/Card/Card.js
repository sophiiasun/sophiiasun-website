import React, { useState } from 'react'
import './Card.css'

const Card = ({ header, body, imgLink, date, github, devpost }) => {
	return (
		<>
			<div className="card">
				<div className="cardImage"><img src={imgLink}></img></div>
				<div className="cardContainer">
					<h1 className="cardHeader">{header} </h1>
					<h4 className="cardBody">{body}</h4>
					<button className="cardButton"><a href={github}>View Code</a></button>
					<button className="cardButton"><a href={devpost}>View Project</a></button>
					<h3 className='cardDate'>{date}</h3>
				</div>
			</div>
		</>
	)
}

export default Card
