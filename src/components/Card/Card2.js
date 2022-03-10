import React, { useState } from 'react'
import '../../components/Components.css'

function Popup(props) {
	return (props.trigger) ? (
		<div className='popup'>
			<div className='popup-inner'>
				<button className='close-btn' onClick={() => props.setTrigger(false)}>Close</button>
				{props.children}
			</div>
		</div>
	) : "";
}

const Card2 = ({ header, body, imgLink, date, github }) => {
	const [buttonPopup, setButtonPopup] = useState(false)
	return (
		<>
			<Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
			<div className="card">
				<div className="cardImage"><img src={imgLink}></img></div>
				<div className="cardContainer">
					<h1 className="cardHeader">{header} </h1>
					<h4 className="cardBody">{body}</h4>
					<button className="cardButton"><a href={github} target="_blank">View Code</a></button>
					<button className="cardButton" onClick={()=>setButtonPopup(true)}>View Demo</button>
					<h3 className='cardDate'>{date}</h3>
				</div>
			</div>
		</>
	)
}

export default Card2
