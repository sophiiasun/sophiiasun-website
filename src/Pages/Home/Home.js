import React from 'react'
import './Home.css'

const Home = () => {
	return (
		<>
			<div class='nameContainer'>		
				<div class='name' data-text="Welcome">Welcome</div>
			</div>

			<div class='homeContainer' style={{ backgroundImage: `url("./Images/Home/background.png")`, backgroundAttachment:'fixed', backgroundSize:'100% 100%' }}>
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

export default Home