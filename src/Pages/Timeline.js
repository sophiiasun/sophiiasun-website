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
							length='July 4,'
							year='2004'
							title='I was born!'
							description='I was born on July 4th, 2004 at 1:45 PM in a hospital in Beijing, China. My family immigrated to Canada when I was around 3 years old. We settled in Toronto until I finished preschool before moving to Markham, where I currently live!'
						/>
						<TimelineCard 
							length='8 years'
							year='2011'
							title='Elementary School'
							description='After leaving kindergarten from Mount Joy Public School, I attended Sam Chapman Public School from grades 1-3 until I transferred to Donald Cousens Public School for the Gifted Program. I graduated in 2019 with the French award '
						/>
						<TimelineCard 
							length='4 years'
							year='2019'
							title='High School'
							description='I was admitted into the International Baccalaureate Program when I applied in grade 8, while allowed me special admissions into Milliken Mills High School. I completed the program in June of 2022, where I receive my Ontario Secondary School Diploma as well as my IBP Diploma.'
						/>
						<TimelineCard 
							length='January'
							year='2019'
							title='First Time Coding'
							description='Having grown up with both parents working in the IT industry, it was not hard for me to pick it up. My dad walked me through the basics of HTML, building me own rendition of a web-based calculator. My interest developed into a passion, where I began coding in my free time.'
						/>
						<TimelineCard 
							length='July'
							year='2019'
							title='Competitive Programming'
							description='I started taking computer contest extracurricular classes, where I was introduced to DMOJ as an online judging platform to submit my solutions to programming problems. I learned numerous algorithms, ranging from graph theory to dynammic programming.'
						/>
						<TimelineCard 
							length='September'
							year='2019'
							title='ICU2O1'
							description='I took grade 10 Introduction to Computer Science (ICU2O1) in my first semester of ninth grade, where I learned about computer systems and its history. I created projects with Visual Basics (VB6) and learned about object oriented programming (OOP).'
						/>
						<TimelineCard 
							length='Feb. 12'
							year='2020'
							title='Canadian Computing Contest'
							description='After months of practising for this contest, I finally wrote the Canadian Computing Contest (CCC). There are two divisions: Junior for grade 9-10 and Senior for grade 11-12. I competed in the Senior division despite being in grade 10, scoring 35/75. and earning Distinctions Award.'
						/>
						<TimelineCard 
							length='February'
							year='2021'
							title='ICU3U1'
							description='I took grade 11 Introduction to Computer Science (ICS3U1) in my second semester of tenth grade, where I learned basic logic and OOP with Python. It is important to first plan my logic with flowcharts before executing, making sure that I document all of my code along the way.'
						/>
						<TimelineCard 
							length='Feb. 17'
							year='2021'
							title='Canadian Computing Contest'
							description='My second attempt at this contest did not go nearly as smoothly as the first time. Because of my busy Junior year, I did not have much time to practise ahead of time. I scored a mere 34/75, which was rather dissapointing and discouraging.'
						/>
						<TimelineCard 
							length='March'
							year='2021'
							title='Personal Programming Projects'
							description="Following CCC 2021, I began dedicating a lot of time to working on side projects with web-based languages. This included games or websites that I would create to develop my front-end programming skills. Visit my 'Projects' page to see more!"
						/>
						<TimelineCard 
							length='Apr. 23-24'
							year='2021'
							title='YRHacks'
							description="YRHacks is my first participation in a hackathon. My team developed a Discord bot (ViBot) that used NLTK Sentiment Analysis software to read the emotions from a user's message. We won the awards 'Overall Second' and 'Best Use of Any Database', along with $100 worth of giftcards."
						/>
						<TimelineCard 
							length='Jul-Aug'
							year='2021'
							title='Personal Programming Projects'
							description="I spent the summer after grade 11 developing more projects and games to flood my Github. This includes games such as Tic Tac Toe, Tetros, and Snake Game, which are all displayed in my 'Projects' page. I worked with my friend, who encouraged me to stayed determined and open-minded."
						/>
						<TimelineCard 
							length='Sep. 22'
							year='2021'
							title='Hack the North'
							description="I participated in the annual Hack the North (hackathon) that brings together hundreds of aspiring engineers. My team created a projects that combines many ideas into one platform. Although we did not qualify for any prizes, we have a great time exploring new softwares."
						/>
						<TimelineCard 
							length='Jan. 9'
							year='2022'
							title='My Personal Website'
							description="After a few months of AFK due to busy schoolwork, I finally started developing my personal website using React App. What you're seeing now is just the beginning as it's still under renovation, but hopefully I can create a website that stores my progress and memories :)"
						/>
				</div>
			</div>
		</>
	)
}

export default Timeline