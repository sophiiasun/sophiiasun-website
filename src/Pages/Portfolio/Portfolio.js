import React from 'react'
import Card from '../../components/Card/Card'
import { Chatify, Medicapp } from './PortfolioElements'
import Popup from './PortfolioElements'

const Portfolio = () => {
    return (
        <div>
            <button className="resumeButton"><a href="https://bit.ly/3ll8fpY">View Resume</a></button>  

            <Card 
                header = 'Chatify'
                body={Chatify}
                
            />

            <Card body = "Group project submission for Hack The North 2021. Made using Flask, NodeJS, Python, Tailwind and Vanilla Javascript. \
            Create a profile on our website using a reference face image and medical information. \
            Using facial recognition, we then display any important medical information of subjects, grabbing the most likely profile (using the reference face picture) \
            and displaying important medical information." 
            header = "MedicApp" 
            imgLink = "./Personal-Site/ProjectImg/MedicApp.jpg"
            displayCode = "https://github.com/sophiiasun/HTN"
            codeLink = "https://devpost.com/software/medicapp-yd2rwc"
            />  

            <Card text = "This bot reads in message with the \
            v!mood command followed by a message. \
            After detecting the mood of the message, \
            the bot then sends a corresponding song that matches the mood \
            and produces an emotion score ranging from -1 (sad) to 1 (happy). \
            Your previous emotion scored will be stored \
            and the average is calculated to compare with your current emotion. \
            Achieved 2nd place overall in YR Hacks 2021 \
            and the best application of a database!" head = "vibot"
            imgLi = "./Personal-Site/ProjectImg/ViBot.JPG"
            displayCode = "https://github.com/tmaswang03/ViBot-Submission"
            codeLink = "https://devpost.com/software/vibot"
            />

            <Card text = "Worked with a group of peers during Hack The North to develop a \
            website that helps read and identify human emotion. \
            Developed with JavaScript/HTML along with ASP.NET/Blazor for both the front and back-end." head = "emotion net" 
            imgLi = "./Personal-Site/ProjectImg/EmotionNet.JPG"
            displayCode = "https://github.com/tmaswang03/Emotion.Net"
            codeLink = "https://devpost.com/software/emotion-net"
            />

            <Card text = "Group project made by Sophia Sun and Thomas Wang. Our own version of tetris made with Vanilla JavaScript, CSS and HTML. \
            Compete to reach the highest score and level, point system based on" 
            head = "Tetros" 
            imgLi = "./Personal-Site/ProjectImg/Tetros.JPG"
            displayCode = "https://github.com/tmaswang03/Tetros"
            codeLink = "https://github.com/tmaswang03/Tetros/archive/refs/heads/main.zip"
            />       

            <Card text = "Team project made with Milliken Mills Robotics Team. Remote controlled and automated robot that is capable of shooting balls into hoops. \
            Made using FRC library and java 11" 
            head = "FRC Robotics" 
            imgLi = "./Personal-Site/ProjectImg/FRCRobotics.JPG"
            displayCode = "https://github.com/tmaswang03/INFINITE-RECHARGE-2020"
            codeLink = "https://github.com/tmaswang03/INFINITE-RECHARGE-2020/archive/refs/heads/master.zip"
            />  

        </div>
    )
}



export default Portfolio
