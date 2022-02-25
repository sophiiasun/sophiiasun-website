(this["webpackJsonpsandbox-testing"]=this["webpackJsonpsandbox-testing"]||[]).push([[0],{14:function(e,t,i){},23:function(e,t,i){},52:function(e,t,i){},55:function(e,t,i){},56:function(e,t,i){"use strict";i.r(t);var n,s,a,r,o=i(2),c=i.n(o),d=i(31),l=i.n(d),h=i(25),j=i(12),m=i(16),g=i(13),b=i(65),u=Object(b.a)((function(e){return{navBarTransparent:{transition:"0.5s ease",backgroundColor:"rgba(255, 229, 236, 1)"},navBarSolid:{transition:"0.5s ease",backgroundColor:"rgba(255, 229, 236, 0.7)"}}})),p=g.a.nav(n||(n=Object(j.a)(["\n  height:8vh; width:100%;\n  display: flex;\n  justify-content: center; \n  align-items: center; \n  font-size: 2rem; \n  position: fixed;\n  opacity: 100%;\n  top:0;\n  z-index:1000;\n  border-bottom: 0.15vw solid var(--col2);\n"]))),x=Object(g.a)(m.b)(s||(s=Object(j.a)(["\n  color: var(--col0); \n  text-decoration: none; \n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  font-size: 2vh; \n  padding:0.5vw 0.7vw;\n  cursor: pointer;\n  border: 0.12vw solid var(--col0); border-radius: 1.5vmin;  \n  height: auto;\n  width: auto; \n  margin: auto; \n  background-size: 100vw 100vw; \n  transition: 0.5s; \n  justify-content: center;  \n  text-transform:uppercase;\n  &:hover { background-position:50vw 0; color:var(--col1); background:var(--col0) }\n"]))),O=Object(g.a)(m.b)(a||(a=Object(j.a)(["    \n  color:var(--col0); \n  justify-self: start;\n  text-decoration: none; \n  font-size: 3vw; \n  margin-left: 0; \n  text-transform: uppercase; \n  -webkit-text-stroke: 0.2vw black;\n  cursor: pointer;\n"]))),f=g.a.div(r||(r=Object(j.a)(["\n  display: grid; \n  grid-template-columns: repeat(5, auto); \n  grid-gap: 10px; \n  list-style: none; \n  text-align: center; \n  font-weight: bold; \n  width: 70vw; \n  height: 80%; \n  justify-content: end;\n"]))),v=(i(14),i.p+"static/media/logo.5ed24666.png"),y=i(0),w=function(){var e=Object(o.useState)("navBarTransparent"),t=Object(h.a)(e,2),i=t[0],n=t[1],s=c.a.useRef();return s.current=i,Object(o.useEffect)((function(){var e=function(){var e=window.scrollY>50;n(e?"navBarSolid":"navBarTransparent")};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(p,{className:u()[s.current],children:[Object(y.jsx)("img",{src:v,style:{height:"4vw",width:"auto"},className:"Logo"}),Object(y.jsx)(O,{to:"/",activeStyle:!0,children:"Sophia"}),Object(y.jsxs)(f,{children:[Object(y.jsx)(x,{to:"/About",activeStyle:!0,children:"About"}),Object(y.jsx)(x,{to:"/Portfolio",activeStyle:!0,children:"Portfolio"}),Object(y.jsx)(x,{to:"/Timeline",activeStyle:!0,children:"Timeline"})]})]})})},I=(i(52),i(6)),k=(i(18),i(23),i(36)),C=i(37),T=i(24),S=i(41),N=i(40),P=i(38),_=i.n(P),L=function(e){Object(S.a)(i,e);var t=Object(N.a)(i);function i(){var e;return Object(k.a)(this,i),(e=t.call(this)).state={isFlipped:!1},e.handleClick=e.handleClick.bind(Object(T.a)(e)),e}return Object(C.a)(i,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return Object(y.jsxs)(_.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical",children:[Object(y.jsx)("div",{id:"flipCard",className:"cardFront",children:Object(y.jsx)("img",{src:this.props.img1,onClick:this.handleClick,className:"flipCardImage"})}),Object(y.jsx)("div",{id:"flipCard",className:"cardFront",children:Object(y.jsx)("img",{src:this.props.img2,onClick:this.handleClick,className:"flipCardImage"})})]})}}]),i}(c.a.Component),A=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{class:"headerContainer",style:{justifyContent:"center"},children:[Object(y.jsx)("div",{class:"header1",children:Object(y.jsx)("img",{class:"headerImg",style:{width:"100vw",height:"100vh"},src:"./Images/About/me2.jpg"})}),Object(y.jsx)("div",{class:"nameContainer",style:{display:"flex;"},children:Object(y.jsx)("div",{class:"name",style:{fontSize:"11vw",zIndex:"100",width:"80vw"},"data-text":"I'mSophiaSun",children:"I'mSophiaSun"})})]}),Object(y.jsx)("div",{children:Object(y.jsxs)("div",{class:"homeContainer",style:{height:"auto",marginTop:"5vw"},children:[Object(y.jsx)("div",{class:"header",style:{color:"var(--col1)",zIndex:"1000",display:"flex",marginBottom:"2vw"},children:"Everything begins with a thought, and thoughts are turned into plans, and plans into reality."}),Object(y.jsx)("div",{class:"wrapper",style:{marginTop:"2vw"},children:Object(y.jsxs)("ul",{class:"dynamic-txts",children:[Object(y.jsx)("li",{children:Object(y.jsx)("span",{children:"Programmer"})}),Object(y.jsx)("li",{children:Object(y.jsx)("span",{children:"Web Developer"})}),Object(y.jsx)("li",{children:Object(y.jsx)("span",{children:"Computer Science Enthusiast"})}),Object(y.jsx)("li",{children:Object(y.jsx)("span",{children:"Waterloo Simp"})})]})})]})}),Object(y.jsxs)("div",{class:"gridContainer",style:{marginTop:"5vw"},children:[Object(y.jsx)("div",{class:"containerR__image",style:{backgroundImage:"url('./Images/About/cruise.jpg')"},children:Object(y.jsxs)("div",{class:"containerR__info",children:["I love travelling. This beautiful",Object(y.jsx)("br",{}),"picture is from a cruise trip in Italy."]})}),Object(y.jsx)("div",{class:"containerL__image",style:{backgroundImage:"url('./Images/About/meanddog2.png')"},children:Object(y.jsxs)("div",{class:"containerL__info",children:["Lolo is just over a year old. Here's",Object(y.jsx)("br",{}),"me on a hike with him!"]})})]}),Object(y.jsxs)("div",{class:"gridContainer",style:{marginBottom:"5vw"},children:[Object(y.jsx)("div",{class:"containerR__image",style:{backgroundImage:"url('./Images/About/food.jpg')"},children:Object(y.jsxs)("div",{class:"containerR__info",children:["FOOD! Not sure what I'd be doing in",Object(y.jsx)("br",{}),"my spare time if I didn't have food."]})}),Object(y.jsx)("div",{class:"containerL__image",style:{backgroundImage:"url('./Images/About/me6.png')"},children:Object(y.jsxs)("div",{class:"containerL__info",children:["Hanging out with friends! Here's a",Object(y.jsx)("br",{}),"picture from one of our date nights <3"]})})]}),Object(y.jsx)("div",{class:"homeContainer",style:{backgroundImage:'url("./Images/Home/background.png")',backgroundAttachment:"fixed",backgroundSize:"100% 100%"},children:Object(y.jsxs)("div",{className:"headerContainer2",children:[Object(y.jsx)(L,{img1:"./Images/Home/boats.jpg",img2:"./Images/Home/me4.jpg"}),Object(y.jsx)(L,{img1:"./Images/Home/me6.jpg",img2:"./Images/Home/me5.jpg"}),Object(y.jsx)(L,{img1:"./Images/Home/me1.jpg",img2:"./Images/Home/dog.png"}),Object(y.jsx)(L,{img1:"./Images/Home/food.jpg",img2:"./Images/Home/cheers2.jpg"})]})})]})},H=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{id:"app",children:[Object(y.jsx)("div",{class:"title",children:Object(y.jsxs)("div",{class:"title-inner",children:[Object(y.jsx)("div",{class:"cafe",children:Object(y.jsx)("div",{class:"cafe-inner",children:"Aspiring"})}),Object(y.jsx)("div",{class:"mozart",children:Object(y.jsx)("div",{class:"mozart-inner",children:"Dreamcatcher"})})]})}),Object(y.jsx)("div",{class:"image",children:Object(y.jsx)("img",{style:{height:"93vh"},src:"./Images/Home/dog2.png",alt:""})})]})})},F=function(e){var t=e.header,i=e.body,n=e.imgLink,s=e.date,a=e.github,r=e.devpost;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("div",{className:"cardImage",children:Object(y.jsx)("img",{src:n})}),Object(y.jsxs)("div",{className:"cardContainer",children:[Object(y.jsxs)("h1",{className:"cardHeader",children:[t," "]}),Object(y.jsx)("h4",{className:"cardBody",children:i}),Object(y.jsx)("button",{className:"cardButton",children:Object(y.jsx)("a",{href:a,children:"View Code"})}),Object(y.jsx)("button",{className:"cardButton",children:Object(y.jsx)("a",{href:r,children:"View Project"})}),Object(y.jsx)("h3",{className:"cardDate",children:s})]})]})})};function R(e){return e.trigger?Object(y.jsx)("div",{className:"popup",children:Object(y.jsxs)("div",{className:"popup-inner",children:[Object(y.jsx)("button",{className:"close-btn",onClick:function(){return e.setTrigger(!1)},children:"Close"}),e.children]})}):""}var B,M,D=function(e){var t=e.header,i=e.body,n=e.imgLink,s=e.date,a=e.github,r=(e.devpost,Object(o.useState)(!1)),c=Object(h.a)(r,2),d=c[0],l=c[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(R,{trigger:d,setTrigger:l}),Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("div",{className:"cardImage",children:Object(y.jsx)("img",{src:n})}),Object(y.jsxs)("div",{className:"cardContainer",children:[Object(y.jsxs)("h1",{className:"cardHeader",children:[t," "]}),Object(y.jsx)("h4",{className:"cardBody",children:i}),Object(y.jsx)("button",{className:"cardButton",children:Object(y.jsx)("a",{href:a,children:"View Code"})}),Object(y.jsx)("button",{className:"cardButton",onClick:function(){return l(!0)},children:"View Demo"}),Object(y.jsx)("h3",{className:"cardDate",children:s})]})]})]})},z=function(e){var t=e.header,i=e.body,n=e.imgLink,s=e.date,a=e.github;e.devpost;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("div",{className:"cardImage",children:Object(y.jsx)("img",{style:{height:"100%"},src:n})}),Object(y.jsxs)("div",{className:"cardContainer",children:[Object(y.jsxs)("h1",{className:"cardHeader",children:[t," "]}),Object(y.jsx)("h4",{className:"cardBody",children:i}),Object(y.jsx)("button",{className:"cardButton",children:Object(y.jsx)("a",{href:a,children:"View Code"})}),Object(y.jsx)("h3",{className:"cardDate",children:s})]})]})})},V="Chatify was a project developed for a Hackathon (Hack This Fall 2.0). Chatify users discuss \nglobal issues through socially tough times (e.g. Covid-19 pandemic). Join numerous rooms with different topics, \nor start their own room with a new topic. Built with React, Bootstrap, and Firebase.",J="Medicapp is aimed to help medical professional to access patients' medical history using \nface-recognition technology. User information is stored using an SQL database hosted by Microsoft Azure. Built \nwith Flask, NodeJS, Python, Tailwind, and Vanilla Javascript.",E="Tetros is a recreation of the popular game Tetris by Thomas Wang and Sophia Sun. Our \nversion features all the traditional Tetris perks, such as T-spins, points system, 7-block rotations, and more!\nCreated using basic Vanilla Javascript, CSS, and HTML.",U="I created two renditions of the traditional Tic Tac Toe, where you can either play with a \nfriend or play against a bot. The bot is programmed with Minimax algorithm, so it will never lose. Built with \nVanilla javascript, html, and css.",W="Minesweeper game created using HTML, Javascript, and CSS. Functions similar \nto that of traditional minesweeper. Left click to expand a tile and right click to mark a tile. Revealed tiles \nrepresent the number of adjacent (including diagonals) mines, so make sure your brain is on!",G="ViBot was a project created by my team and I during a hackathon called 'YRHacks' in 2021. \nIt analyzes a user's message using NLTK Sentiment Analysis software, and was implemented using Discord API with\n Python 3.9. The database is scripted with SQL, hosted by Microsoft Azure.",Y="An interactive Dominoes Game created using Python 3.4. Implements GUI using Tkinter \n library import and combined several Python source code files. Brute force is used to determine computer \n playable moves and to determine victories/losses.",K="Participated in FIRST Robotics with High School team (Milliken Silver Knight 7735). \nDesigned hardware and scripted software code. Everybot supports both automated movements and remote-controlled. \nDeveloped using Java 11 and FRC Robotics Research Library.",Q="An interactive game created using Arduino Uno CPU 2020 Version (scripted in C++). Hardware \nincludes LCD display, potentiometer, buzzer, buttons, etc. Tracks the score for player against computer, first \nto five wins.",X="A mini-bot built from VEX IQ and coded with VEXcode blocks, using components such as an \noptical sensor, touch LEDs, bumpers, distance sensors, etc. The robot traverses a terrain to pick up and place \nthree scattered boxes from start (top left) to finish (bottom right).",q=function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(F,{header:"Chatify",body:V,date:"10/24/2021",imgLink:"./Images/Portfolio/Chatify.png",github:"https://github.com/sophiiasun/Chatify",devpost:"https://devpost.com/software/chatify-42wgsp"}),Object(y.jsx)(F,{header:"medicap",body:J,date:"09/19/2021",imgLink:"./Images/Portfolio/MedicApp.jpg",github:"https://github.com/sophiiasun/HTN",devpost:"https://devpost.com/software/medicapp-yd2rwc"}),Object(y.jsx)(D,{header:"Tetros",body:E,date:"07/29/2021",imgLink:"./Images/Portfolio/tetros.png",github:"https://github.com/sophiiasun/Tetros"}),Object(y.jsx)(D,{header:"Tic Tac Toe",body:U,date:"07/22/2021",imgLink:"./Images/Portfolio/tictactoe.png",github:"https://github.com/sophiiasun/Tic-Tac-Toe"}),Object(y.jsx)(F,{header:"vibot",body:G,date:"04/24/2021",imgLink:"./Images/Portfolio/vibot.png",github:"https://github.com/sophiiasun/ViBot"}),Object(y.jsx)(D,{header:"minesweeper",body:W,date:"04/16/2021",imgLink:"./Images/Portfolio/Minesweeper.png",github:"https://github.com/sophiiasun/Minesweeper"}),Object(y.jsx)(z,{header:"Dominoes",body:Y,date:"06/20/2020",imgLink:"./Images/Portfolio/dominoes.png",github:"https://github.com/sophiiasun/Dominoes"}),Object(y.jsx)(F,{header:"Rock, Paper, Scissors!",body:Q,date:"06/19/2020",imgLink:"./Images/Portfolio/rock.png",github:"https://github.com/sophiiasun/Rock-Paper-Scissors-",devpost:"https://www.youtube.com/watch?v=49EYVgdUtA0"}),Object(y.jsx)(F,{header:"Infinite Recharge",body:K,date:"03/22/2020",imgLink:"./Images/Portfolio/frc.png",github:"https://github.com/sophiiasun/INFINITE-RECHARGE-2020",devpost:"https://www.youtube.com/watch?v=gmiYWTmFRVE"}),Object(y.jsx)(F,{header:"Vex IQ Robotics",body:X,date:"11/20/2019",imgLink:"./Images/Portfolio/abc.png",github:"https://github.com/sophiiasun/Minesweeper",devpost:"https://www.youtube.com/watch?v=299XMhfa4Pw"})]})},$=function(e){var t=e.length,i=e.year,n=e.title,s=e.description;return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{class:"timeline",children:[Object(y.jsx)("div",{class:"icon"}),Object(y.jsx)("div",{class:"date-content",children:Object(y.jsx)("div",{class:"date-outer",children:Object(y.jsxs)("span",{class:"date",children:[Object(y.jsx)("span",{class:"month",children:t}),Object(y.jsx)("span",{class:"year",children:i})]})})}),Object(y.jsxs)("div",{class:"timeline-content",children:[Object(y.jsx)("h5",{class:"timelineTitle",children:n}),Object(y.jsx)("p",{class:"description",children:s})]})]})})},Z=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{class:"headerContainer2",children:Object(y.jsx)("div",{class:"header1",style:{fontSize:"3vw",background:"var(--col0)"},children:"Wondering what I've been up to?"})}),Object(y.jsx)("div",{class:"timelineContainer",children:Object(y.jsxs)("div",{class:"main-timeline",children:[Object(y.jsx)($,{length:"July 4,",year:"2004",title:"I was born!",description:"I was born on July 4th, 2004 at 1:45 PM in a hospital in Beijing, China. My family immigrated to Canada when I was around 3 years old. We settled in Toronto until I finished preschool before moving to Markham, where I currently live!"}),Object(y.jsx)($,{length:"8 years",year:"2011",title:"Elementary School",description:"After leaving kindergarten from Mount Joy Public School, I attended Sam Chapman Public School from grades 1-3 until I transferred to Donald Cousens Public School for the Gifted Program. I graduated in 2019 with the French award "}),Object(y.jsx)($,{length:"4 years",year:"2019",title:"High School",description:"I was admitted into the International Baccalaureate Program when I applied in grade 8, while allowed me special admissions into Milliken Mills High School. I completed the program in June of 2022, where I receive my Ontario Secondary School Diploma as well as my IBP Diploma."}),Object(y.jsx)($,{length:"January",year:"2019",title:"First Time Coding",description:"Having grown up with both parents working in the IT industry, it was not hard for me to pick it up. My dad walked me through the basics of HTML, building me own rendition of a web-based calculator. My interest developed into a passion, where I began coding in my free time."}),Object(y.jsx)($,{length:"July",year:"2019",title:"Competitive Programming",description:"I started taking computer contest extracurricular classes, where I was introduced to DMOJ as an online judging platform to submit my solutions to programming problems. I learned numerous algorithms, ranging from graph theory to dynammic programming."}),Object(y.jsx)($,{length:"September",year:"2019",title:"ICU2O1",description:"I took grade 10 Introduction to Computer Science (ICU2O1) in my first semester of ninth grade, where I learned about computer systems and its history. I created projects with Visual Basics (VB6) and learned about object oriented programming (OOP)."}),Object(y.jsx)($,{length:"Feb. 12",year:"2020",title:"Canadian Computing Contest",description:"After months of practising for this contest, I finally wrote the Canadian Computing Contest (CCC). There are two divisions: Junior for grade 9-10 and Senior for grade 11-12. I competed in the Senior division despite being in grade 10, scoring 35/75. and earning Distinctions Award."}),Object(y.jsx)($,{length:"February",year:"2021",title:"ICU3U1",description:"I took grade 11 Introduction to Computer Science (ICS3U1) in my second semester of tenth grade, where I learned basic logic and OOP with Python. It is important to first plan my logic with flowcharts before executing, making sure that I document all of my code along the way."}),Object(y.jsx)($,{length:"Feb. 17",year:"2021",title:"Canadian Computing Contest",description:"My second attempt at this contest did not go nearly as smoothly as the first time. Because of my busy Junior year, I did not have much time to practise ahead of time. I scored a mere 34/75, which was rather dissapointing and discouraging."}),Object(y.jsx)($,{length:"March",year:"2021",title:"Personal Programming Projects",description:"Following CCC 2021, I began dedicating a lot of time to working on side projects with web-based languages. This included games or websites that I would create to develop my front-end programming skills. Visit my 'Projects' page to see more!"}),Object(y.jsx)($,{length:"Apr. 23-24",year:"2021",title:"YRHacks",description:"YRHacks is my first participation in a hackathon. My team developed a Discord bot (ViBot) that used NLTK Sentiment Analysis software to read the emotions from a user's message. We won the awards 'Overall Second' and 'Best Use of Any Database', along with $100 worth of giftcards."}),Object(y.jsx)($,{length:"Jul-Aug",year:"2021",title:"Personal Programming Projects",description:"I spent the summer after grade 11 developing more projects and games to flood my Github. This includes games such as Tic Tac Toe, Tetros, and Snake Game, which are all displayed in my 'Projects' page. I worked with my friend, who encouraged me to stayed determined and open-minded."}),Object(y.jsx)($,{length:"Sep. 22",year:"2021",title:"Hack the North",description:"I participated in the annual Hack the North (hackathon) that brings together hundreds of aspiring engineers. My team created a projects that combines many ideas into one platform. Although we did not qualify for any prizes, we have a great time exploring new softwares."}),Object(y.jsx)($,{length:"Jan. 9",year:"2022",title:"My Personal Website",description:"After a few months of AFK due to busy schoolwork, I finally started developing my personal website using React App. What you're seeing now is just the beginning as it's still under renovation, but hopefully I can create a website that stores my progress and memories :)"})]})})]})},ee=g.a.footer(B||(B=Object(j.a)(["\n  height:8vw; width:100%;\n  justify-content:center; \n  font-size:1.5rem; \n  bottom:0;\n  border-top:0.15vw solid var(--col2);\n  margin-top:50px;\n  background-color:rgba(255, 229, 236, 0.7);\n  align-items:center;\n"]))),te=g.a.div(M||(M=Object(j.a)(["\n  display:flex;\n  list-style:none; \n  text-align:center; \n  font-weight:bold; \n  width:100%; \n  height:auto; \n  justify-content:center;\n  margin-top:1.2vw;\n"]))),ie=(i.p,i(15)),ne=i(17),se=i(39),ae=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(ee,{children:Object(y.jsxs)(te,{children:[Object(y.jsx)("div",{class:"container1",style:{marginRight:"10vw"},children:Object(y.jsx)("div",{class:"header",children:"Let's Connect!"})}),Object(y.jsx)("a",{href:"https://www.instagram.com/sophii.asun/",children:Object(y.jsx)(ie.a,{icon:ne.c,className:"icons"})}),Object(y.jsx)("a",{href:"https://open.spotify.com/user/0xom5vjwl5vd1g8vtuzjrkcx5",children:Object(y.jsx)(ie.a,{icon:ne.e,className:"icons"})}),Object(y.jsx)("a",{href:"https://github.com/sophiiasun",children:Object(y.jsx)(ie.a,{icon:ne.b,className:"icons"})}),Object(y.jsx)("a",{href:"https://www.linkedin.com/in/sophia-sun-781907193/",children:Object(y.jsx)(ie.a,{icon:ne.d,className:"icons"})}),Object(y.jsx)("a",{id:"email",children:Object(y.jsx)(ie.a,{icon:se.a,className:"icons"})}),Object(y.jsx)("a",{id:"discord",children:Object(y.jsx)(ie.a,{icon:ne.a,className:"icons"})}),Object(y.jsx)("p",{class:"discUser",id:"discUser",children:"sophii.asun#6432"}),Object(y.jsx)("p",{class:"email",id:"email",children:"sxphia.sxn@gmail.com"})]})})})},re=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)("div",{class:"backgroundDiv",children:[Object(y.jsxs)("div",{class:"gridContainer",children:[Object(y.jsxs)("div",{class:"containerR__image",style:{backgroundImage:"url('./Images/About/cruise.jpg')"},children:[Object(y.jsx)("div",{class:"containerR__info",children:"I love travelling. This beautiful"}),Object(y.jsx)("div",{class:"containerR__info containerR__location",children:"picture is from a cruise trip in Italy."})]}),Object(y.jsx)("div",{class:"containerL__image",style:{backgroundImage:"url('./Images/About/meanddog2.png')"},children:Object(y.jsxs)("div",{class:"containerL__info",children:["Lolo is just over a year old. Here's ",Object(y.jsx)("br",{})," me on a hike with him!"]})})]}),Object(y.jsxs)("div",{class:"gridContainer",children:[Object(y.jsxs)("div",{class:"containerR__image",style:{backgroundImage:"url('./Images/About/food.jpg')"},children:[Object(y.jsx)("div",{class:"containerR__info",children:"FOOD! Not sure what I'd be doing in"}),Object(y.jsx)("div",{class:"containerR__info containerR__location",children:"my spare time if I didn't have food."})]}),Object(y.jsxs)("div",{class:"containerL__image",style:{backgroundImage:"url('./Images/About/me6.png')"},children:[Object(y.jsx)("div",{class:"containerL__info",children:"Hanging out with friends! Here's a"}),Object(y.jsx)("div",{class:"containerL__info containerL__location",children:"picture from one of our date nights <3"})]})]})]})})};var oe=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(m.a,{children:[Object(y.jsx)(w,{}),Object(y.jsxs)(I.c,{children:[Object(y.jsx)(I.a,{path:"/",exact:!0,component:H}),Object(y.jsx)(I.a,{path:"/About",component:A}),Object(y.jsx)(I.a,{path:"/Portfolio",component:q}),Object(y.jsx)(I.a,{path:"/Timeline",component:Z}),Object(y.jsx)(I.a,{path:"/test",component:re})]}),Object(y.jsx)(ae,{})]})})};i(55);l.a.render(Object(y.jsx)(oe,{}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.ad84eadf.chunk.js.map