import React from 'react'
import ParticlesBg from 'particles-bg'
import './Pages.css'

const About = () => {
	return (
		<>
			<div class='headerContainer' style={{justifyContent:`center`}}>
				<div class='header1'>
					<img class='headerImg' style={{width:`100vw`, height:`100vh`}} src='./Images/About/me2.jpg'></img>
				</div>
				<div class='nameContainer' style={{display:'flex;'}}>		
					<div class='name' style={{fontSize:`11vw`, zIndex:'100', width:`80vw`}} data-text="I'mSophiaSun">I'mSophiaSun</div>
				</div>
			</div>

			<div class='homeContainer' style={{height:'20vw'}}>
			<div class='header' style={{color:'var(--col1)', zIndex:'1000', display:'flex', marginBottom:'3vw'}}>Everything begins with a thought, and thoughts are turned into plans, and plans into reality.</div>
				<div class="wrapper">
					<ul class="dynamic-txts">
						<li><span>Programmer</span></li>
						<li><span>Web Developer</span></li>
						<li><span>Computer Science Enthusiast</span></li>
						<li><span>Waterloo Simp</span></li>
					</ul>
				</div>
			</div>

			<div class='homeContainer' style={{backgroundImage: `url("./Images/Home/background.png")`, backgroundAttachment:'fixed', backgroundSize:'100% 100%' }}>
				<div class='homeCard'>
					<div class='homeCard-face homeCard-face--front'><img class='homeCardImg' src='./Images/Home/boats.jpg'></img></div>
					<div class='homeCard-face homeCard-face--back'><img class='homeCardImg' src='./Images/Home/me4.jpg'></img></div>
				</div>
				<div class='homeCard'>
					<div class='homeCard-face homeCard-face--front'><img class='homeCardImg' src='./Images/Home/me6.jpg'></img></div>
					<div class='homeCard-face homeCard-face--back'><img class='homeCardImg' src='./Images/Home/me5.jpg'></img></div>
				</div>
				<div class='homeCard'>
					<div class='homeCard-face homeCard-face--front'><img class='homeCardImg' src='./Images/Home/me1.jpg'></img></div>
					<div class='homeCard-face homeCard-face--back'><img class='homeCardImg' src='./Images/Home/dog.png'></img></div>
				</div>
				<div class='homeCard'>
					<div class='homeCard-face homeCard-face--front'><img class='homeCardImg' src='./Images/Home/food.jpg'></img></div>
					<div class='homeCard-face homeCard-face--back'><img class='homeCardImg' src='./Images/Home/cheers2.jpg'></img></div>
				</div>
			</div>
		</>
	)
}

export default About