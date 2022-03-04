import { React, useState } from 'react'
import ParticlesBg from 'particles-bg'
import './Pages.css'
import FlipCard from '../components/Card/FlipCard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTv, faHeadphonesAlt, faGamepad, faCameraRetro } from "@fortawesome/free-solid-svg-icons"

const About = () => {
	const hobbiesInfo = [ 
		"Click the buttons above to learn more about each one! Who knows? Maybe we'll share similar interests :D", 
		"I spend a lott of my spare time watching all sorts of Cdramas and Kdramas, I've seen almost all of the popular ones and probaly even some that you've never heard of! I'm currently watching a Kdrama on Netflix called Business Proposal (2022), which is still on-going. I prefer to binge shows rather than watching them slowly, because where's the fun in that? I'm the kind of person who can binge through 5 seasons of Grey's Anatomy in a day (I take pride in that!) while finishing overdued work...", 
		"I listen to a variety of music genres in general, but I prefer to listen to soothing music such as Lofi or softer songs when I work. I got into BTS in 2020 and I think I'm obsessed with V... Not the point. I would recommend the song Pied Piper by BTS and Sweet Night by V, since those songs are really moving. You can also check out my Spotify playlists, which is linked in the footer! Don't judge how I organize my playlists, I like it the way it is >:(( ", 
		"You might be surprised at this, but I'm quite the video game addict... Especially for League of Legends!! If I get a day off after a week filled with busy work, I will likely spend at least 10 hours of that day playing League of Legends. Which is probably not healthy, but that's what keeps me going! I will occasionally have that Animal Crossing grind, since that game is just too cute and wholesome <33. I'm not too far into the game though, so I'm still learning about what to do!", 
		"When I was young, my dad bought this big chunky fancy camera to take pictures for our family when we went on vacation. That camera has since retired, but I've picked up the hobby of taking pictures wherever I go. I think it's a great way to document my life for future me to look back on. I've plastered a myriad of pictures that I've taken on my website, and hopefully that will inspire you to take pictures of yourself too! (P.S. I take most pictures from my iPhone)" ]
	const [hobbieIndex, setHobbieIndex] = useState(0)
	
	const aboutme = `Hey! My name is Sophia Sun and I am currently a grade 12 students enrolled in the International Baccalaureate
					 Program at Milliken Mills High School. I was born in China, but was immigrated to Canada when I was nearly three
					 years old! High school graduation is just around the corner, and I think my biggest wish is that I don't lose 
					 connections with my current friends. I'm not sure which university is my top choice yet, but I hope to meet 
					 more and more people wherever I end up going!`

	return (
		<>
			<div class='headerContainer' style={{justifyContent:`center`}}>
				<div class='header1'><img class='headerImg' style={{width:`100vw`, height:`100vh`}} src='./Images/About/me2.jpg'></img></div>
				<div class='nameContainer' style={{display:'flex;'}}><div class='name' style={{fontSize:`11vw`, zIndex:'100', width:`80vw`}} data-text="I'mSophiaSun">I'mSophiaSun</div></div>
			</div>

			<div>
				<div class='homeContainer' style={{height:'auto', marginTop:'5vw'}}>
					<div class='header' style={{color:'var(--col1)', zIndex:'1000', display:'flex', marginBottom:'2vw'}}>Everything begins with a thought, and thoughts are turned into plans, and plans into reality.</div>
					<div class="wrapper" style={{marginTop:'5vw'}}>
						<ul class="dynamic-txts">
							<li><span>Programmer</span></li>
							<li><span>Web Developer</span></li>
							<li><span>Computer Science Enthusiast</span></li>
							<li><span>Waterloo Simp</span></li>
						</ul>
					</div>
				</div>
			</div>

			<div class='hobbiesContainer'>
				<div class='hobbiesGrid'> 
					<div class="gridContainer2">
						<div class="header hobbiesTitle">My Hobbies</div>
						<div class="hobbiesGrid2">
							<button onClick = {() => setHobbieIndex(1)}><FontAwesomeIcon icon={faTv} className="icons icons2"/></button>
							<button onClick = {() => setHobbieIndex(2)}><FontAwesomeIcon icon={faHeadphonesAlt} className="icons icons2"/></button>
							<button onClick = {() => setHobbieIndex(3)}><FontAwesomeIcon icon={faGamepad} className="icons icons2"/></button>
							<button onClick = {() => setHobbieIndex(4)}><FontAwesomeIcon icon={faCameraRetro} className="icons icons2"/></button>
						</div>
						<div class='header hobbiesContent'>{hobbiesInfo[hobbieIndex]}</div>
					</div>
					<div class="gridContainer2">
						{/* <div class='hobbiesButton'><a href='https://drive.google.com/file/d/1Ju39qpKBPSmEq_Fqz-liUgqorie4ktcS/view?usp=sharing' target="_blank">View Resume</a></div> */}
						<button class='hobbiesButton' onClick = {() => window.open('https://drive.google.com/file/d/1Ju39qpKBPSmEq_Fqz-liUgqorie4ktcS/view?usp=sharing', "_blank")}>Resume</button>
						<div class="header hobbiesTitle">About Me</div>
						<div class='header hobbiesContent'>{aboutme}</div>
					</div>
				</div>
			</div>			

			<div style={{height:'auto', width:'auto', backgroundColor:'rgba(255, 229, 236, 0.2)'}}>
				<div class="gridContainer" style={{marginTop:'5vw'}}>
					<div class="gridTileR" style={{justifyContent:'justify', paddingLeft:'25vw', paddingRight:'1.5vw'}}>
						<div class="containerR__image" style={{backgroundImage:"url('./Images/About/cruise.jpg')"}}>
							<div class="containerR__info">I love travelling. This beautiful<br></br>picture is from a cruise trip in Italy.</div>
						</div>
					</div>
					<div class="gridTileL" style={{justifyContent:'justify', paddingRight:'25vw', paddingLeft:'1.5vw'}}>
						<div class="containerL__image" style={{backgroundImage:"url('./Images/About/meanddog2.png')"}}>
							<div class="containerL__info">Lolo is just over a year old. Here's<br></br>me on a hike with him!</div>
						</div>
					</div>
				</div>
				<div class="gridContainer" style={{marginTop:'5vw'}}>
					<div class="gridTileR" style={{justifyContent:'justify', paddingLeft:'25vw', paddingRight:'1.5vw'}}>
						<div class="containerR__image" style={{backgroundImage:"url('./Images/About/food.jpg')"}}>
							<div class="containerR__info">FOOD! Not sure what I'd be doing in<br></br>my spare time if I didn't have food.</div>
						</div>
					</div>
					<div class="gridTileL" style={{justifyContent:'justify', paddingRight:'25vw', paddingLeft:'1.5vw'}}>
						<div class="containerL__image" style={{backgroundImage:"url('./Images/About/me6.png')"}}>
							<div class="containerL__info">Hanging out with friends! Here's a<br></br>picture from one of our date nights &lt;3</div>
						</div>
					</div>
				</div>
			</div>

			<div class='homeContainer' style={{backgroundImage: `url("./Images/Home/background.png")`, backgroundAttachment:'fixed', backgroundSize:'100% 100%' }}>
                <div className='headerContainer2'>
                    <FlipCard img1='./Images/Home/boats.jpg' img2='./Images/Home/me4.jpg'/>
                    <FlipCard img1='./Images/Home/me6.jpg' img2='./Images/Home/me5.jpg'/>
                    <FlipCard img1='./Images/Home/me1.jpg' img2='./Images/Home/dog.png'/>
                    <FlipCard img1='./Images/Home/food.jpg' img2='./Images/Home/cheers2.jpg'/>
                </div>
            </div>
		</>
	)
}



export default About