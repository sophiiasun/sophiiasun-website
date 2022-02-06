import React from 'react'
import ParticlesBg from 'particles-bg'
import './Pages.css'
import FlipCard from '../components/Card/FlipCard'



const test = () => {
	return (
		<>
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

export default test