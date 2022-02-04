import React, { useState } from 'react'
import '../../components/Components.css'

const Card = ({ header, body, imgLink, date, github, devpost }) => {
	return (
		<>
			<div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                    <div class="date-outer">
                        <span class="date">
                            <span class="month">1 Years</span>
                            <span class="year">2015</span>
                        </span>
                    </div>
                </div>
                <div class="timeline-content">
                    <h5 class="timelineTitle">Product Designer</h5>
                    <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.
                    </p>
                </div>
            </div>
		</>
	)
}

export default Card
