import React from 'react'
import ParticlesBg from 'particles-bg'
import './Pages.css'
import TimelineCard from '../components/Card/TimelineCard'

const Timeline = () => {
	return (
		<>
			<div class='headerContainer2'>
				<div class='header1' style={{fontSize:'3vw', background:'var(--col0)'}}>Wondering what I've been up to?</div>
			</div>


			<div class='timelineContainer'>
				<div class='main-timeline'>
						<TimelineCard 
							length='1'
							year='2'
							title='Product Designer'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.'
						/>
						<TimelineCard 
							length='1'
							year='2'
							title='Product Designer'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.'
						/>
						<TimelineCard 
							length='1'
							year='2'
							title='Product Designer'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.'
						/>
						<TimelineCard 
							length='1'
							year='2'
							title='Product Designer'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.'
						/>
						<TimelineCard 
							length='1'
							year='2'
							title='Product Designer'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.'
						/>
						<TimelineCard 
							length='1'
							year='2'
							title='Product Designer'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.'
						/>
						<TimelineCard 
							length='1'
							year='2'
							title='Product Designer'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.'
						/>
						<TimelineCard 
							length='1'
							year='2'
							title='Product Designer'
							description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat volutpat. Aenean interdum finibus efficitur. Praesent dapibus dolor felis, eu ultrices elit molestie.'
						/>
				</div>
			</div>
		</>
	)
}

export default Timeline