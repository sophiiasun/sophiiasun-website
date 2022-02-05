import React, { useState } from 'react'
import '../../components/Components.css'

const Card = ({ header, body, imgLink, date, github, devpost }) => {
	return (
		<>
			<div className="card">
				<div className="cardImage"><img style={{height:'100%'}} src={imgLink}></img></div>
				<div className="cardContainer">
					<h1 className="cardHeader">{header} </h1>
					<h4 className="cardBody">{body}</h4>
					<button className="cardButton"><a href={github}>View Code</a></button>
					<h3 className='cardDate'>{date}</h3>
				</div>
			</div>
		</>
	)
}

export default Card