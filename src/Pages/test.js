import React from 'react'
import ParticlesBg from 'particles-bg'
import './Pages.css'
import FlipCard from '../components/Card/FlipCard'



const test = () => {
	return (
		<>
            <div class="backgroundDiv">
                <div class="gridContainer">
                    <div class="containerR__image" style={{backgroundImage:"url('./Images/About/cruise.jpg')"}}>
                        <div class="containerR__info">I love travelling. This beautiful</div>
                        <div class="containerR__info containerR__location">picture is from a cruise trip in Italy.</div>
                    </div>
                    <div class="containerL__image" style={{backgroundImage:"url('./Images/About/meanddog2.png')"}}>
                        <div class="containerL__info">Lolo is just over a year old. Here's <br></br> me on a hike with him!</div>
                    </div>
                </div>
                <div class="gridContainer">
                    <div class="containerR__image" style={{backgroundImage:"url('./Images/About/food.jpg')"}}>
                        <div class="containerR__info">FOOD! Not sure what I'd be doing in</div>
                        <div class="containerR__info containerR__location">my spare time if I didn't have food.</div>
                    </div>
                    <div class="containerL__image" style={{backgroundImage:"url('./Images/About/me6.png')"}}>
                        <div class="containerL__info">Hanging out with friends! Here's a</div>
                        <div class="containerL__info containerL__location">picture from one of our date nights &lt;3</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default test