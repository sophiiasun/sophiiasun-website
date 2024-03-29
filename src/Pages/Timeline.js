import { React, useEffect } from 'react'
import ParticlesBg from 'particles-bg'
import './Pages.css'
import TimelineCard from '../components/Card/TimelineCard'
import AOS from "aos";
import "aos/dist/aos.css";
 
// Credits: https://www.bootdey.com/snippets/view/bs4-my-experience-timeline#preview

const Timeline = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<>
			<div class='sideImageContainer'>
				<img src='./Images/Timeline/catlight.png' class='sideImage'></img>
				<img src='./Images/Timeline/cake4.png' class='sideImage'></img>
				<img src='./Images/Timeline/me3.png' class='sideImage'></img>
				<img src='./Images/Timeline/dog.png' class='sideImage'></img>
				<img src='./Images/Timeline/me.png' class='sideImage'></img>
				<img src='./Images/Timeline/bridge.png' class='sideImage'></img>
				<img src='./Images/Timeline/pic4.png' class='sideImage'></img>
				<img src='./Images/Timeline/pic2.png' class='sideImage'></img>
				<img src='./Images/Timeline/dog2.png' class='sideImage'></img>
				<img src='./Images/Timeline/cake2.png' class='sideImage'></img>
				<img src='./Images/Timeline/me5.png' class='sideImage'></img>
				<img src='./Images/Timeline/tree.png' class='sideImage'></img>
				<img src='./Images/Timeline/me4.png' class='sideImage'></img>
				<img src='./Images/Timeline/friends.png' class='sideImage'></img>
				<img src='./Images/Timeline/sushi.png' class='sideImage'></img>
				<img src='./Images/Timeline/me6.png' class='sideImage'></img>
				<img src='./Images/Timeline/cake3.png' class='sideImage'></img>
				<img src='./Images/Timeline/pic3.png' class='sideImage'></img>
				<img src='./Images/Timeline/ramen.png' class='sideImage'></img>
			</div>
			<div class='sideImageContainer' style={{right:'0'}}>
				<img src='./Images/Timeline/cake2.png' class='sideImage'></img>
				<img src='./Images/Timeline/me5.png' class='sideImage'></img>
				<img src='./Images/Timeline/tree.png' class='sideImage'></img>
				<img src='./Images/Timeline/me4.png' class='sideImage'></img>
				<img src='./Images/Timeline/friends.png' class='sideImage'></img>
				<img src='./Images/Timeline/sushi.png' class='sideImage'></img>
				<img src='./Images/Timeline/me6.png' class='sideImage'></img>
				<img src='./Images/Timeline/cake3.png' class='sideImage'></img>
				<img src='./Images/Timeline/pic3.png' class='sideImage'></img>
				<img src='./Images/Timeline/ramen.png' class='sideImage'></img>
				<img src='./Images/Timeline/catlight.png' class='sideImage'></img>
				<img src='./Images/Timeline/cake4.png' class='sideImage'></img>
				<img src='./Images/Timeline/me3.png' class='sideImage'></img>
				<img src='./Images/Timeline/dog.png' class='sideImage'></img>
				<img src='./Images/Timeline/me.png' class='sideImage'></img>
				<img src='./Images/Timeline/bridge.png' class='sideImage'></img>
				<img src='./Images/Timeline/pic4.png' class='sideImage'></img>
				<img src='./Images/Timeline/pic2.png' class='sideImage'></img>
				<img src='./Images/Timeline/dog2.png' class='sideImage'></img>
				<img src='./Images/Timeline/cake2.png' class='sideImage'></img>
			</div>

			<div class='timelineContainer' >
				<div class='main-timeline' style={{marginTop:'50px'}}>
						<TimelineCard 
							animation='fade-left'
							length='July 4'
							year='2004'
							title='I was born!'
							description='I was born on July 4th, 2004 at 1:45 PM in a hospital in Beijing, China. My family immigrated to Canada when I was around 3 years old. We settled in Toronto until I finished preschool before moving to Markham, where I currently live!'
						/>
						<TimelineCard 
							animation='fade-right'
							length='8 years'
							year='2011'
							title='Elementary School'
							description='After leaving kindergarten from Mount Joy Public School, I attended Sam Chapman Public School from grades 1-3 until I transferred to Donald Cousens Public School for the Gifted Program. I graduated in 2019 with the French award, ready to start fresh in a new stage of life.'
						/>
						<TimelineCard 
							animation='fade-left'
							length='4 years'
							year='2019'
							title='High School'
							description='I was admitted into the International Baccalaureate Program when I applied in grade 8, while allowed me special admissions into Milliken Mills High School. I completed the program in June of 2022, where I receive my Ontario Secondary School Diploma as well as my IBP Diploma.'
						/>
						<TimelineCard 
							animation='fade-right'
							length='January'
							year='2019'
							title='First Time Coding'
							description='Having grown up with both parents working in the IT industry, it was not hard for me to pick it up. My dad walked me through the basics of HTML, building me own rendition of a web-based calculator. My interest developed into a passion, where I began coding in my free time.'
						/>
						<TimelineCard 
							animation='fade-left'
							length='July'
							year='2019'
							title='Competitive Programming'
							description='I started taking computer contest extracurricular classes, where I was introduced to DMOJ as an online judging platform to submit my solutions to programming problems. I learned numerous algorithms, ranging from graph theory to dynammic programming.'
						/>
						<TimelineCard 
							animation='fade-right'
							length='September'
							year='2019'
							title='ICU2O1'
							description='I took grade 10 Introduction to Computer Science (ICU2O1) in my first semester of ninth grade, where I learned about computer systems and its history. I created projects with Visual Basics (VB6) and learned about object oriented programming (OOP).'
						/>
						<TimelineCard 
							animation='fade-left'
							length='Feb. 12'
							year='2020'
							title='Canadian Computing Contest'
							description='After months of practising for this contest, I finally wrote the Canadian Computing Contest (CCC). There are two divisions: Junior for grade 9-10 and Senior for grade 11-12. I competed in the Senior division despite being in grade 10, scoring 35/75. and earning Distinctions Award.'
						/>
						<TimelineCard 
							animation='fade-right'
							length='February'
							year='2021'
							title='ICU3U1'
							description='I took grade 11 Introduction to Computer Science (ICS3U1) in my second semester of tenth grade, where I learned basic logic and OOP with Python. It is important to first plan my logic with flowcharts before executing, making sure that I document all of my code along the way.'
						/>
						<TimelineCard 
							animation='fade-left'
							length='Feb. 17'
							year='2021'
							title='Canadian Computing Contest'
							description='My second attempt at this contest did not go nearly as smoothly as the first time. Because of my busy Junior year, I did not have much time to practise. I scored a mere 34/75, which was rather disappointing and discouraging.'
						/>
						<TimelineCard 
							animation='fade-right'
							length='March'
							year='2021'
							title='Personal Programming Projects'
							description="Following CCC 2021, I began dedicating a lot of time to working on side projects with web-based languages. This included games or websites that I would create to develop my front-end programming skills. Visit my 'Projects' page to see more!"
						/>
						<TimelineCard 
							animation='fade-left'
							length='Apr. 23-24'
							year='2021'
							title='YRHacks'
							description="YRHacks is my first participation in a hackathon. My team developed a Discord bot (ViBot) that used NLTK Sentiment Analysis software to read the emotions from a user's message. We won the awards 'Overall Second' and 'Best Use of Any Database', along with $100 worth of giftcards."
						/>
						<TimelineCard 
							animation='fade-right'
							length='Jul-Aug'
							year='2021'
							title='Personal Programming Projects'
							description="I spent the summer after grade 11 developing more projects and games to flood my Github. This includes games such as Tic Tac Toe, Tetros, and Snake Game, which are all displayed in my 'Projects' page. I worked with my friend, who encouraged me to stayed determined and open-minded."
						/>
						<TimelineCard 
							animation='fade-left'
							length='Sep. 22'
							year='2021'
							title='Hack the North'
							description="I participated in the annual Hack the North (hackathon) that brings together hundreds of aspiring engineers. My team created a project that combines many ideas into one platform. Although we did not qualify for any prizes, we have a great time exploring new softwares."
						/>
						<TimelineCard 
							animation='fade-right'
							length='Jan. 9'
							year='2022'
							title='My Personal Website'
							description="After a few months of AFK due to busy schoolwork, I finally started developing my personal website using React App. What you're seeing now is just the beginning as it's still under renovation, but hopefully I can create a website that stores my progress and memories :)"
						/>
						<TimelineCard 
							animation='fade-left'
							length='Apr. 19'
							year='2022'
							title='Waterloo SE Offer'
							description="I received my Waterloo Software Engineering offer!! Although I didn't get it first round (back in March), I'm happy that I was able to get it second round since I had requested for early consideration, as my UBC offer expires on May 1st. Nevertheless, huge milestone!!"
						/>
						<TimelineCard 
							animation='fade-right'
							length='May 11'
							year='2022'
							title='Waterloo CS Offer'
							description="After several months of waiting, I finally received my Waterloo Computer Science offers! Not only that, but also my CS/BBA offer. Up until this point, I thought that CS/BBA would be my top choice, but now I think I might be going into SE... I still have time to decide though :)"
						/>
						<TimelineCard 
							animation='fade-left'
							length='Sep. 9'
							year='2022'
							title='First day at Waterloo'
							description="My first day at the University of Waterloo was nothing short of pure excitement and change. I spent the entire week of orientation running around getting to know the campus and meeting new people. I'd fanticized of this the last 4 years, and it was finally a dream come true."
						/>
						<TimelineCard 
							animation='fade-right'
							length='Sep. 16-18'
							year='2022'
							title='First day at Waterloo'
							description="My first day at the University of Waterloo was nothing short of pure excitement and change. I spent the entire week of orientation running around getting to know the campus and meeting new people. I'd fanticized of this the last 4 years, and it was finally a dream come true."
						/>
				</div>
			</div>
		</>
	)
}

export default Timeline