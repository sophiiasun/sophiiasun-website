import React from 'react'
import ParticlesBg from 'particles-bg'
import './Pages.css'
import FlipCard from '../components/Card/FlipCard'

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

			<div>
				<div class='homeContainer' style={{height:'auto', marginTop:'5vw'}}>
					<div class='header' style={{color:'var(--col1)', zIndex:'1000', display:'flex', marginBottom:'2vw'}}>Everything begins with a thought, and thoughts are turned into plans, and plans into reality.</div>
					<div class="wrapper">
						<ul class="dynamic-txts">
							<li><span>Programmer</span></li>
							<li><span>Web Developer</span></li>
							<li><span>Computer Science Enthusiast</span></li>
							<li><span>Waterloo Simp</span></li>
						</ul>
					</div>
				</div>
			</div>

			<div class="gridContainer">
                <div
                    class="containerR__image" style={{backgroundImage:"url('./Images/About/cruise.jpg')"}}>
                    <div class="containerR__info">I love travelling. This beautiful</div>
                    <div class="containerR__info containerR__location">picture is from a cruise trip in Italy.</div>
                </div>
                <div
                    class="containerL__image" style={{backgroundImage:"url('./Images/About/meanddog2.png')"}}>
                    <div class="containerL__info">Lolo is just over a year old. Here's</div>
                    <div class="containerL__info containerL__location">me on a hike with him!</div>
                </div>
            </div>
            <div class="gridContainer" style={{marginBottom:'5vw'}}>
                <div
                    class="containerR__image" style={{backgroundImage:"url('./Images/About/food.jpg')"}}>
                    <div class="containerR__info">FOOD! Not sure what I'd be doing in</div>
                    <div class="containerR__info containerR__location">my spare time if I didn't have food.</div>
                </div>
                <div
                    class="containerL__image" style={{backgroundImage:"url('./Images/About/me6.png')"}}>
                    <div class="containerL__info">Hanging out with friends! Here's a</div>
                    <div class="containerL__info containerL__location">picture from one of our date nights &lt;3</div>
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