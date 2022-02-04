import React from 'react'
import '../../components/Components.css'

const TimelineCard = ({length, year, title, description}) => {
	return (
		<>
			<div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                    <div class="date-outer">
                        <span class="date">
                            <span class="month">{length}</span>
                            <span class="year">{year}</span>
                        </span>
                    </div>
                </div>
                <div class="timeline-content">
                    <h5 class="timelineTitle">{title}</h5>
                    <p class="description">{description}</p>
                </div>
            </div>
		</>
	)
}

export default TimelineCard
