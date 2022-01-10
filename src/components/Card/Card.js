import React from 'react'
import './Card.css'
import Button from '../Button'

function Popup(props) {
    // return <div className='popup'></div>
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn'>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
    return null
}

const Card = ({header, body, imgLink, displayCode, codeLink}) => {
    return (
        <div className = "projectContainer">
            <div className = "imageHolder"><img src = {imgLink}></img></div>
            <div className = "infoContainer">
                <h1 className = "projectHeader">{header} </h1>
                <h4 className = "projectInfo">{body}</h4>
                <button className = "codeBtn"><a href= {displayCode} >View Code</a></button>
                {/* <div className="popup"></div> */}
                <Popup trigger={true}></Popup>
                <button className = "projectBtn"><a href= {codeLink}>View Project</a></button>  
            </div>
        </div>
    )
}

export default Card
