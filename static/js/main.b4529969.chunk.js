(this["webpackJsonpsandbox-testing"]=this["webpackJsonpsandbox-testing"]||[]).push([[0],{15:function(e,t,i){},25:function(e,t,i){},53:function(e,t,i){},57:function(e,t,i){},58:function(e,t,i){"use strict";i.r(t);var s,n,a,c,r,o=i(2),l=i.n(o),d=i(33),m=i.n(d),g=i(18),h=i(13),j=i(17),b=i(14),u=i(67),p=Object(u.a)((function(e){return{navBarTransparent:{transition:"0.5s ease",backgroundColor:"rgba(255, 229, 236, 1)"},navBarSolid:{transition:"0.5s ease",backgroundColor:"rgba(255, 229, 236, 0.7)"}}})),f=b.a.nav(s||(s=Object(h.a)(["\n  height:8vh; width:100%;\n  display: flex;\n  justify-content: center; \n  align-items: center; \n  font-size: 2rem; \n  position: fixed;\n  opacity: 100%;\n  top:0;\n  z-index:1000;\n  border-bottom: 0.15vw solid var(--col2);\n"]))),x=Object(b.a)(j.b)(n||(n=Object(h.a)(["\n  color: var(--col0); \n  text-decoration: none; \n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  font-size: 2vh; \n  padding:0.5vw 0.7vw;\n  cursor: pointer;\n  height: auto;\n  width: 8vw; \n  margin: auto;\n  margin-right:1vw;\n  background-size: 100vw 100vw; \n  transition: 0.5s; \n  justify-content: center;  \n  text-transform:uppercase;\n  &:hover { border-bottom: 0.12vw solid var(--col0); }\n"]))),O=Object(b.a)(j.b)(a||(a=Object(h.a)(["    \n  color:var(--col0); \n  justify-self: start;\n  text-decoration: none; \n  font-size: 3vw; \n  margin-left: 0; \n  text-transform: uppercase; \n  -webkit-text-stroke: 0.2vw black;\n  cursor: pointer;\n"]))),v=b.a.div(c||(c=Object(h.a)(["\n  display: grid; \n  grid-template-columns: repeat(5, auto); \n  grid-gap: 10px; \n  list-style: none; \n  text-align: center; \n  font-weight: bold; \n  width: 70vw; \n  height: 80%; \n  justify-content: end;\n"]))),y=b.a.a(r||(r=Object(h.a)(["    \n  color: var(--col1); \n  text-decoration: none; \n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  font-size: 2vh; \n  padding:0.5vw 0.7vw;\n  cursor: pointer;\n  border: 0.12vw solid var(--col0); border-radius: 1.5vmin;  \n  height: auto;\n  width: auto; \n  margin: auto; \n  background-size: 100vw 100vw; \n  transition: 0.5s; \n  justify-content: center;  \n  text-transform:uppercase;\n  background:var(--col0);\n  &:hover { background-position:50vw 0; color:var(--col0); background:var(--col1) }\n"]))),w=(i(15),i.p+"static/media/logo.5ed24666.png"),I=i(0),k=function(){var e=Object(o.useState)("navBarTransparent"),t=Object(g.a)(e,2),i=t[0],s=t[1],n=l.a.useRef();return n.current=i,Object(o.useEffect)((function(){var e=function(){var e=window.scrollY>50;s(e?"navBarSolid":"navBarTransparent")};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]),Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(f,{className:p()[n.current],children:[Object(I.jsx)("img",{src:w,style:{height:"4vw",width:"auto"},className:"Logo"}),Object(I.jsx)(O,{to:"/",activeStyle:!0,children:"Sophia"}),Object(I.jsxs)(v,{children:[Object(I.jsx)(x,{to:"/About",activeStyle:!0,children:"About"}),Object(I.jsx)(x,{to:"/Portfolio",activeStyle:!0,children:"Portfolio"}),Object(I.jsx)(x,{to:"/Timeline",activeStyle:!0,children:"Timeline"}),Object(I.jsx)(y,{href:"https://drive.google.com/file/d/1Ju39qpKBPSmEq_Fqz-liUgqorie4ktcS/view?usp=sharing",target:"_blank",children:"Resume"})]})]})})},T=(i(53),i(6)),C=(i(21),i(25),i(38)),S=i(39),N=i(26),P=i(42),_=i(41),L=i(40),A=i.n(L),H=function(e){Object(P.a)(i,e);var t=Object(_.a)(i);function i(){var e;return Object(C.a)(this,i),(e=t.call(this)).state={isFlipped:!1},e.handleClick=e.handleClick.bind(Object(N.a)(e)),e}return Object(S.a)(i,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState((function(e){return{isFlipped:!e.isFlipped}}))}},{key:"render",value:function(){return Object(I.jsxs)(A.a,{isFlipped:this.state.isFlipped,flipDirection:"vertical",children:[Object(I.jsx)("div",{id:"flipCard",className:"cardFront",children:Object(I.jsx)("img",{src:this.props.img1,onClick:this.handleClick,className:"flipCardImage"})}),Object(I.jsx)("div",{id:"flipCard",className:"cardFront",children:Object(I.jsx)("img",{src:this.props.img2,onClick:this.handleClick,className:"flipCardImage"})})]})}}]),i}(l.a.Component),R=i(11),B=i(16),F=function(){var e=Object(o.useState)(0),t=Object(g.a)(e,2),i=t[0],s=t[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{class:"headerContainer",style:{justifyContent:"center"},children:[Object(I.jsx)("div",{class:"header1",children:Object(I.jsx)("img",{class:"headerImg",style:{width:"100vw",height:"100vh"},src:"./Images/About/me2.jpg"})}),Object(I.jsx)("div",{class:"nameContainer",style:{display:"flex;"},children:Object(I.jsx)("div",{class:"name",style:{fontSize:"11vw",zIndex:"100",width:"80vw"},"data-text":"I'mSophiaSun",children:"I'mSophiaSun"})})]}),Object(I.jsx)("div",{children:Object(I.jsxs)("div",{class:"homeContainer",style:{height:"auto",marginTop:"5vw"},children:[Object(I.jsx)("div",{class:"header",style:{color:"var(--col1)",zIndex:"1000",display:"flex",marginBottom:"2vw"},children:"Everything begins with a thought, and thoughts are turned into plans, and plans into reality."}),Object(I.jsx)("div",{class:"wrapper",style:{marginTop:"5vw"},children:Object(I.jsxs)("ul",{class:"dynamic-txts",children:[Object(I.jsx)("li",{children:Object(I.jsx)("span",{children:"Programmer"})}),Object(I.jsx)("li",{children:Object(I.jsx)("span",{children:"Web Developer"})}),Object(I.jsx)("li",{children:Object(I.jsx)("span",{children:"Computer Science Enthusiast"})}),Object(I.jsx)("li",{children:Object(I.jsx)("span",{children:"Waterloo Simp"})})]})})]})}),Object(I.jsx)("div",{style:{width:"100%",height:"50vw",marginTop:"6.5vw",display:"flex",alignItems:"center",backgroundImage:'url("./Images/Home/background.png")',backgroundAttachment:"fixed",backgroundSize:"100% 100%"},children:Object(I.jsx)("div",{class:"hobbiesContainer",children:Object(I.jsxs)("div",{class:"hobbiesGrid",children:[Object(I.jsxs)("div",{class:"gridContainer2",children:[Object(I.jsx)("div",{class:"header hobbiesTitle",children:"My Hobbies"}),Object(I.jsxs)("div",{class:"hobbiesGrid2",children:[Object(I.jsx)("button",{onClick:function(){return s(1)},children:Object(I.jsx)(R.a,{icon:B.e,className:"icons icons2"})}),Object(I.jsx)("button",{onClick:function(){return s(2)},children:Object(I.jsx)(R.a,{icon:B.d,className:"icons icons2"})}),Object(I.jsx)("button",{onClick:function(){return s(3)},children:Object(I.jsx)(R.a,{icon:B.c,className:"icons icons2"})}),Object(I.jsx)("button",{onClick:function(){return s(4)},children:Object(I.jsx)(R.a,{icon:B.a,className:"icons icons2"})})]}),Object(I.jsx)("div",{class:"header hobbiesContent",children:["Click the buttons above to learn more about each one! Who knows? Maybe we'll share similar interests :D","I spend a lott of my spare time watching all sorts of Cdramas and Kdramas, I've seen almost all of the popular ones and probaly even some that you've never heard of! I'm currently watching a Kdrama on Netflix called Business Proposal (2022), which is still on-going. I prefer to binge shows rather than watching them slowly, because where's the fun in that? I'm the kind of person who can binge through 5 seasons of Grey's Anatomy in a day (I take pride in that!) while finishing overdued work...","I listen to a variety of music genres in general, but I prefer to listen to soothing music such as Lofi or softer songs when I work. I got into BTS in 2020 and I think I'm obsessed with V... Not the point. I would recommend the song Pied Piper by BTS and Sweet Night by V, since those songs are really moving. You can also check out my Spotify playlists, which is linked in the footer! Don't judge how I organize my playlists, I like it the way it is >:(( ","You might be surprised at this, but I'm quite the video game addict... Especially for League of Legends!! If I get a day off after a week filled with busy work, I will likely spend at least 10 hours of that day playing League of Legends. Which is probably not healthy, but that's what keeps me going! I will occasionally have that Animal Crossing grind, since that game is just too cute and wholesome <33. I'm not too far into the game though, so I'm still learning about what to do!","When I was young, my dad bought this big chunky fancy camera to take pictures for our family when we went on vacation. That camera has since retired, but I've picked up the hobby of taking pictures wherever I go. I think it's a great way to document my life for future me to look back on. I've plastered a myriad of pictures that I've taken on my website, and hopefully that will inspire you to take pictures of yourself too! (P.S. I take most pictures from my iPhone)"][i]})]}),Object(I.jsxs)("div",{class:"gridContainer2",children:[Object(I.jsx)("button",{class:"hobbiesButton",onClick:function(){return window.open("https://drive.google.com/file/d/1Ju39qpKBPSmEq_Fqz-liUgqorie4ktcS/view?usp=sharing","_blank")},children:"Resume"}),Object(I.jsx)("div",{class:"header hobbiesTitle",children:"About Me"}),Object(I.jsx)("div",{class:"header hobbiesContent",children:"Hey! My name is Sophia Sun and I am currently a grade 12 student enrolled in the International Baccalaureate\n\t\t\t\t\t Program at Milliken Mills High School. I was born in China, but was immigrated to Canada when I was nearly three\n\t\t\t\t\t years old! High school graduation is just around the corner, and I think my biggest wish is that I don't lose \n\t\t\t\t\t connections with my current friends. I'm not sure which university is my top choice yet, but I hope to meet \n\t\t\t\t\t more and more people wherever I end up going!"})]})]})})}),Object(I.jsxs)("div",{style:{height:"auto",width:"auto"},children:[Object(I.jsxs)("div",{class:"gridContainer",style:{marginTop:"5vw"},children:[Object(I.jsx)("div",{class:"gridTileR",style:{justifyContent:"justify",paddingLeft:"25vw",paddingRight:"1.5vw"},children:Object(I.jsx)("div",{class:"containerR__image",style:{backgroundImage:"url('./Images/About/cruise.jpg')"},children:Object(I.jsxs)("div",{class:"containerR__info",children:["I love travelling. This beautiful",Object(I.jsx)("br",{}),"picture is from a cruise trip in Italy."]})})}),Object(I.jsx)("div",{class:"gridTileL",style:{justifyContent:"justify",paddingRight:"25vw",paddingLeft:"1.5vw"},children:Object(I.jsx)("div",{class:"containerL__image",style:{backgroundImage:"url('./Images/About/meanddog2.png')"},children:Object(I.jsxs)("div",{class:"containerL__info",children:["Lolo is just over a year old. Here's",Object(I.jsx)("br",{}),"me on a hike with him!"]})})})]}),Object(I.jsxs)("div",{class:"gridContainer",style:{marginTop:"5vw"},children:[Object(I.jsx)("div",{class:"gridTileR",style:{justifyContent:"justify",paddingLeft:"25vw",paddingRight:"1.5vw"},children:Object(I.jsx)("div",{class:"containerR__image",style:{backgroundImage:"url('./Images/About/food.jpg')"},children:Object(I.jsxs)("div",{class:"containerR__info",children:["FOOD! Not sure what I'd be doing in",Object(I.jsx)("br",{}),"my spare time if I didn't have food."]})})}),Object(I.jsx)("div",{class:"gridTileL",style:{justifyContent:"justify",paddingRight:"25vw",paddingLeft:"1.5vw"},children:Object(I.jsx)("div",{class:"containerL__image",style:{backgroundImage:"url('./Images/About/me6.png')"},children:Object(I.jsxs)("div",{class:"containerL__info",children:["Hanging out with friends! Here's a",Object(I.jsx)("br",{}),"picture from one of our date nights <3"]})})})]})]}),Object(I.jsx)("div",{class:"homeContainer",style:{backgroundImage:'url("./Images/Home/background.png")',backgroundAttachment:"fixed",backgroundSize:"100% 100%"},children:Object(I.jsxs)("div",{className:"headerContainer2",children:[Object(I.jsx)(H,{img1:"./Images/Home/boats.jpg",img2:"./Images/Home/me4.jpg"}),Object(I.jsx)(H,{img1:"./Images/Home/me6.jpg",img2:"./Images/Home/me5.jpg"}),Object(I.jsx)(H,{img1:"./Images/Home/me1.jpg",img2:"./Images/Home/dog.png"}),Object(I.jsx)(H,{img1:"./Images/Home/food.jpg",img2:"./Images/Home/cheers2.jpg"})]})})]})},M=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{id:"app",children:[Object(I.jsx)("div",{class:"title",children:Object(I.jsxs)("div",{class:"title-inner",children:[Object(I.jsx)("div",{class:"cafe",children:Object(I.jsx)("div",{class:"cafe-inner",children:"Aspiring"})}),Object(I.jsx)("div",{class:"mozart",children:Object(I.jsx)("div",{class:"mozart-inner",children:"Dreamcatcher"})})]})}),Object(I.jsx)("div",{class:"image",children:Object(I.jsx)("img",{style:{height:"93vh"},src:"./Images/Home/dog2.png",alt:""})})]})})},D=function(e){var t=e.header,i=e.body,s=e.imgLink,n=e.date,a=e.github,c=e.devpost;return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:"card",children:[Object(I.jsx)("div",{className:"cardImage",children:Object(I.jsx)("img",{src:s})}),Object(I.jsxs)("div",{className:"cardContainer",children:[Object(I.jsxs)("h1",{className:"cardHeader",children:[t," "]}),Object(I.jsx)("h4",{className:"cardBody",children:i}),Object(I.jsx)("button",{className:"cardButton",children:Object(I.jsx)("a",{href:a,target:"_blank",children:"View Code"})}),Object(I.jsx)("button",{className:"cardButton",children:Object(I.jsx)("a",{href:c,target:"_blank",children:"View Project"})}),Object(I.jsx)("h3",{className:"cardDate",children:n})]})]})})};function z(e){return e.trigger?Object(I.jsx)("div",{className:"popup",children:Object(I.jsxs)("div",{className:"popup-inner",children:[Object(I.jsx)("button",{className:"close-btn",onClick:function(){return e.setTrigger(!1)},children:"Close"}),e.children]})}):""}var V,J,E=function(e){var t=e.header,i=e.body,s=e.imgLink,n=e.date,a=e.github,c=Object(o.useState)(!1),r=Object(g.a)(c,2),l=r[0],d=r[1];return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(z,{trigger:l,setTrigger:d}),Object(I.jsxs)("div",{className:"card",children:[Object(I.jsx)("div",{className:"cardImage",children:Object(I.jsx)("img",{src:s})}),Object(I.jsxs)("div",{className:"cardContainer",children:[Object(I.jsxs)("h1",{className:"cardHeader",children:[t," "]}),Object(I.jsx)("h4",{className:"cardBody",children:i}),Object(I.jsx)("button",{className:"cardButton",children:Object(I.jsx)("a",{href:a,target:"_blank",children:"View Code"})}),Object(I.jsx)("button",{className:"cardButton",onClick:function(){return d(!0)},children:"View Demo"}),Object(I.jsx)("h3",{className:"cardDate",children:n})]})]})]})},U=function(e){var t=e.header,i=e.body,s=e.imgLink,n=e.date,a=e.github;return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:"card",children:[Object(I.jsx)("div",{className:"cardImage",children:Object(I.jsx)("img",{style:{height:"100%"},src:s})}),Object(I.jsxs)("div",{className:"cardContainer",children:[Object(I.jsxs)("h1",{className:"cardHeader",children:[t," "]}),Object(I.jsx)("h4",{className:"cardBody",children:i}),Object(I.jsx)("button",{className:"cardButton",children:Object(I.jsx)("a",{href:a,target:"_blank",children:"View Code"})}),Object(I.jsx)("h3",{className:"cardDate",children:n})]})]})})},q="Chatify was a project developed for a Hackathon (Hack This Fall 2.0). Chatify users discuss \nglobal issues through socially tough times (e.g. Covid-19 pandemic). Join numerous rooms with different topics, \nor start their own room with a new topic. Built with React, Bootstrap, and Firebase.",W="Medicapp is aimed to help medical professional to access patients' medical history using \nface-recognition technology. User information is stored using an SQL database hosted by Microsoft Azure. Built \nwith Flask, NodeJS, Python, Tailwind, and Vanilla Javascript.",G="Tetros is a recreation of the popular game Tetris. Our version features all the traditional \nTetris perks, such as T-spins, points system, 7-block rotations, and more! Created using basic Vanilla \nJavascript, CSS, and HTML.",K="I created two renditions of the traditional Tic Tac Toe, where you can either play with a \nfriend or play against a bot. The bot is programmed with Minimax algorithm, so it will never lose. Built with \nVanilla javascript, html, and css.",Y="Minesweeper game created using HTML, Javascript, and CSS. Functions are similar \nto that of traditional minesweeper. Left click to expand a tile and right click to mark a tile. Revealed tiles \nrepresent the number of adjacent (including diagonals) mines, so make sure your brain is on!",Q="ViBot was a project created by my team and I during a hackathon called 'YRHacks' in 2021. \nIt analyzes a user's message using NLTK Sentiment Analysis software, and was implemented using Discord API with\n Python 3.9. The database is scripted with SQL, hosted by Microsoft Azure.",X="An interactive Dominoes Game created using Python 3.4. Implements GUI using Tkinter \n library import and combined several Python source code files. Brute force is used to determine computer \n playable moves and to determine victories/losses.",$="Participated in FIRST Robotics with High School team (Milliken Silver Knight 7735). \nDesigned hardware and scripted software code. Everybot supports both automated movements and remote-controlled. \nDeveloped using Java 11 and FRC Robotics Research Library.",Z="An interactive game created using Arduino Uno CPU 2020 Version (scripted in C++). Hardware \nincludes LCD display, potentiometer, buzzer, buttons, etc. Tracks the score for player against computer, first \nto five wins.",ee="A mini-bot built from VEX IQ and coded with VEXcode blocks, using components such as an \noptical sensor, touch LEDs, bumpers, distance sensors, etc. The robot traverses a terrain to pick up and place \nthree scattered boxes from start (top left) to finish (bottom right).",te=function(){return Object(I.jsxs)("div",{children:[Object(I.jsx)(D,{header:"Chatify",body:q,date:"10/24/2021",imgLink:"./Images/Portfolio/Chatify.png",github:"https://github.com/sophiiasun/Chatify",devpost:"https://devpost.com/software/chatify-42wgsp"}),Object(I.jsx)(D,{header:"medicapp",body:W,date:"09/19/2021",imgLink:"./Images/Portfolio/MedicApp.jpg",github:"https://github.com/sophiiasun/HTN",devpost:"https://devpost.com/software/medicapp-yd2rwc"}),Object(I.jsx)(E,{header:"Tetros",body:G,date:"07/29/2021",imgLink:"./Images/Portfolio/tetros.png",github:"https://github.com/sophiiasun/Tetros"}),Object(I.jsx)(E,{header:"Tic Tac Toe",body:K,date:"07/22/2021",imgLink:"./Images/Portfolio/tictactoe.png",github:"https://github.com/sophiiasun/Tic-Tac-Toe"}),Object(I.jsx)(D,{header:"vibot",body:Q,date:"04/24/2021",imgLink:"./Images/Portfolio/vibot.png",github:"https://github.com/sophiiasun/ViBot"}),Object(I.jsx)(E,{header:"minesweeper",body:Y,date:"04/16/2021",imgLink:"./Images/Portfolio/Minesweeper.png",github:"https://github.com/sophiiasun/Minesweeper"}),Object(I.jsx)(U,{header:"Dominoes",body:X,date:"06/20/2020",imgLink:"./Images/Portfolio/dominoes.png",github:"https://github.com/sophiiasun/Dominoes"}),Object(I.jsx)(D,{header:"Rock, Paper, Scissors!",body:Z,date:"06/19/2020",imgLink:"./Images/Portfolio/rock.png",github:"https://github.com/sophiiasun/Rock-Paper-Scissors-",devpost:"https://www.youtube.com/watch?v=49EYVgdUtA0"}),Object(I.jsx)(D,{header:"Infinite Recharge",body:$,date:"03/22/2020",imgLink:"./Images/Portfolio/frc.png",github:"https://github.com/sophiiasun/INFINITE-RECHARGE-2020",devpost:"https://www.youtube.com/watch?v=gmiYWTmFRVE"}),Object(I.jsx)(D,{header:"Vex IQ Robotics",body:ee,date:"11/20/2019",imgLink:"./Images/Portfolio/abc.png",github:"https://github.com/sophiiasun/Minesweeper",devpost:"https://www.youtube.com/watch?v=299XMhfa4Pw"})]})},ie=function(e){var t=e.length,i=e.year,s=e.title,n=e.description,a=e.animation;return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{class:"timeline","data-aos":a,children:[Object(I.jsx)("div",{class:"icon"}),Object(I.jsx)("div",{class:"date-content",children:Object(I.jsx)("div",{class:"date-outer",children:Object(I.jsxs)("span",{class:"date",children:[Object(I.jsx)("span",{class:"month",children:t}),Object(I.jsx)("span",{class:"year",children:i})]})})}),Object(I.jsxs)("div",{class:"timeline-content",children:[Object(I.jsx)("h5",{class:"timelineTitle",children:s}),Object(I.jsx)("p",{class:"description",children:n})]})]})})},se=i(30),ne=i.n(se),ae=(i(56),function(){return Object(o.useEffect)((function(){ne.a.init(),ne.a.refresh()}),[]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{class:"sideImageContainer",children:[Object(I.jsx)("img",{src:"./Images/Timeline/catlight.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/cake4.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/me3.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/dog.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/me.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/bridge.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/pic4.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/pic2.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/dog2.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/cake2.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/cake2.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/me5.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/tree.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/me4.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/friends.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/sushi.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/me6.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/cake3.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/pic3.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/ramen.png",class:"sideImage"})]}),Object(I.jsxs)("div",{class:"sideImageContainer",style:{right:"0"},children:[Object(I.jsx)("img",{src:"./Images/Timeline/cake2.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/me5.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/tree.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/me4.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/friends.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/sushi.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/me6.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/cake3.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/pic3.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/ramen.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/catlight.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/cake4.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/me3.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/dog.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/me.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/bridge.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/pic4.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/pic2.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/dog2.png",class:"sideImage"}),Object(I.jsx)("img",{src:"./Images/Timeline/cake2.png",class:"sideImage"})]}),Object(I.jsx)("div",{class:"timelineContainer",children:Object(I.jsxs)("div",{class:"main-timeline",style:{marginTop:"50px"},children:[Object(I.jsx)(ie,{animation:"fade-left",length:"July 4,",year:"2004",title:"I was born!",description:"I was born on July 4th, 2004 at 1:45 PM in a hospital in Beijing, China. My family immigrated to Canada when I was around 3 years old. We settled in Toronto until I finished preschool before moving to Markham, where I currently live!"}),Object(I.jsx)(ie,{animation:"fade-right",length:"8 years",year:"2011",title:"Elementary School",description:"After leaving kindergarten from Mount Joy Public School, I attended Sam Chapman Public School from grades 1-3 until I transferred to Donald Cousens Public School for the Gifted Program. I graduated in 2019 with the French award "}),Object(I.jsx)(ie,{animation:"fade-left",length:"4 years",year:"2019",title:"High School",description:"I was admitted into the International Baccalaureate Program when I applied in grade 8, while allowed me special admissions into Milliken Mills High School. I completed the program in June of 2022, where I receive my Ontario Secondary School Diploma as well as my IBP Diploma."}),Object(I.jsx)(ie,{animation:"fade-right",length:"January",year:"2019",title:"First Time Coding",description:"Having grown up with both parents working in the IT industry, it was not hard for me to pick it up. My dad walked me through the basics of HTML, building me own rendition of a web-based calculator. My interest developed into a passion, where I began coding in my free time."}),Object(I.jsx)(ie,{animation:"fade-left",length:"July",year:"2019",title:"Competitive Programming",description:"I started taking computer contest extracurricular classes, where I was introduced to DMOJ as an online judging platform to submit my solutions to programming problems. I learned numerous algorithms, ranging from graph theory to dynammic programming."}),Object(I.jsx)(ie,{animation:"fade-right",length:"September",year:"2019",title:"ICU2O1",description:"I took grade 10 Introduction to Computer Science (ICU2O1) in my first semester of ninth grade, where I learned about computer systems and its history. I created projects with Visual Basics (VB6) and learned about object oriented programming (OOP)."}),Object(I.jsx)(ie,{animation:"fade-left",length:"Feb. 12",year:"2020",title:"Canadian Computing Contest",description:"After months of practising for this contest, I finally wrote the Canadian Computing Contest (CCC). There are two divisions: Junior for grade 9-10 and Senior for grade 11-12. I competed in the Senior division despite being in grade 10, scoring 35/75. and earning Distinctions Award."}),Object(I.jsx)(ie,{animation:"fade-right",length:"February",year:"2021",title:"ICU3U1",description:"I took grade 11 Introduction to Computer Science (ICS3U1) in my second semester of tenth grade, where I learned basic logic and OOP with Python. It is important to first plan my logic with flowcharts before executing, making sure that I document all of my code along the way."}),Object(I.jsx)(ie,{animation:"fade-left",length:"Feb. 17",year:"2021",title:"Canadian Computing Contest",description:"My second attempt at this contest did not go nearly as smoothly as the first time. Because of my busy Junior year, I did not have much time to practise. I scored a mere 34/75, which was rather disappointing and discouraging."}),Object(I.jsx)(ie,{animation:"fade-right",length:"March",year:"2021",title:"Personal Programming Projects",description:"Following CCC 2021, I began dedicating a lot of time to working on side projects with web-based languages. This included games or websites that I would create to develop my front-end programming skills. Visit my 'Projects' page to see more!"}),Object(I.jsx)(ie,{animation:"fade-left",length:"Apr. 23-24",year:"2021",title:"YRHacks",description:"YRHacks is my first participation in a hackathon. My team developed a Discord bot (ViBot) that used NLTK Sentiment Analysis software to read the emotions from a user's message. We won the awards 'Overall Second' and 'Best Use of Any Database', along with $100 worth of giftcards."}),Object(I.jsx)(ie,{animation:"fade-right",length:"Jul-Aug",year:"2021",title:"Personal Programming Projects",description:"I spent the summer after grade 11 developing more projects and games to flood my Github. This includes games such as Tic Tac Toe, Tetros, and Snake Game, which are all displayed in my 'Projects' page. I worked with my friend, who encouraged me to stayed determined and open-minded."}),Object(I.jsx)(ie,{animation:"fade-left",length:"Sep. 22",year:"2021",title:"Hack the North",description:"I participated in the annual Hack the North (hackathon) that brings together hundreds of aspiring engineers. My team created a project that combines many ideas into one platform. Although we did not qualify for any prizes, we have a great time exploring new softwares."}),Object(I.jsx)(ie,{animation:"fade-right",length:"Jan. 9",year:"2022",title:"My Personal Website",description:"After a few months of AFK due to busy schoolwork, I finally started developing my personal website using React App. What you're seeing now is just the beginning as it's still under renovation, but hopefully I can create a website that stores my progress and memories :)"})]})})]})}),ce=b.a.footer(V||(V=Object(h.a)(["\n  height:8vw; width:100%;\n  justify-content:center; \n  font-size:1.5rem; \n  bottom:0;\n  border-top:0.15vw solid var(--col2);\n  margin-top:50px;\n  background-color:rgba(255, 229, 236, 1);\n  align-items:center;\n  z-index:10;\n"]))),re=b.a.div(J||(J=Object(h.a)(["\n  display:flex;\n  list-style:none; \n  text-align:center; \n  font-weight:bold; \n  width:100%; \n  height:auto; \n  justify-content:center;\n  margin-top:1.2vw;\n"]))),oe=(i.p,i(19)),le=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(ce,{children:Object(I.jsxs)(re,{children:[Object(I.jsx)("div",{class:"container1",style:{marginRight:"10vw"},children:Object(I.jsx)("div",{class:"header",children:"Let's Connect!"})}),Object(I.jsx)("a",{href:"https://www.instagram.com/sophii.asun/",children:Object(I.jsx)(R.a,{icon:oe.c,className:"icons",style:{margin:"0 1vw"}})}),Object(I.jsx)("a",{href:"https://open.spotify.com/user/0xom5vjwl5vd1g8vtuzjrkcx5",children:Object(I.jsx)(R.a,{icon:oe.e,className:"icons",style:{margin:"0 1vw"}})}),Object(I.jsx)("a",{href:"https://github.com/sophiiasun",children:Object(I.jsx)(R.a,{icon:oe.b,className:"icons",style:{margin:"0 1vw"}})}),Object(I.jsx)("a",{href:"https://www.linkedin.com/in/sophia-sun-781907193/",children:Object(I.jsx)(R.a,{icon:oe.d,className:"icons",style:{margin:"0 1vw"}})}),Object(I.jsx)("a",{id:"email",children:Object(I.jsx)(R.a,{icon:B.b,className:"icons",style:{margin:"0 1vw"}})}),Object(I.jsx)("a",{id:"discord",children:Object(I.jsx)(R.a,{icon:oe.a,className:"icons",style:{margin:"0 1vw"}})}),Object(I.jsx)("p",{class:"discUser",id:"discUser",children:"sophii.asun#6432"}),Object(I.jsx)("p",{class:"email",id:"email",children:"sxphia.sxn@gmail.com"})]})})})},de=function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{class:"backgroundDiv",children:[Object(I.jsxs)("div",{class:"gridContainer",children:[Object(I.jsxs)("div",{class:"containerR__image",style:{backgroundImage:"url('./Images/About/cruise.jpg')"},children:[Object(I.jsx)("div",{class:"containerR__info",children:"I love travelling. This beautiful"}),Object(I.jsx)("div",{class:"containerR__info containerR__location",children:"picture is from a cruise trip in Italy."})]}),Object(I.jsx)("div",{class:"containerL__image",style:{backgroundImage:"url('./Images/About/meanddog2.png')"},children:Object(I.jsxs)("div",{class:"containerL__info",children:["Lolo is just over a year old. Here's ",Object(I.jsx)("br",{})," me on a hike with him!"]})})]}),Object(I.jsxs)("div",{class:"gridContainer",children:[Object(I.jsxs)("div",{class:"containerR__image",style:{backgroundImage:"url('./Images/About/food.jpg')"},children:[Object(I.jsx)("div",{class:"containerR__info",children:"FOOD! Not sure what I'd be doing in"}),Object(I.jsx)("div",{class:"containerR__info containerR__location",children:"my spare time if I didn't have food."})]}),Object(I.jsxs)("div",{class:"containerL__image",style:{backgroundImage:"url('./Images/About/me6.png')"},children:[Object(I.jsx)("div",{class:"containerL__info",children:"Hanging out with friends! Here's a"}),Object(I.jsx)("div",{class:"containerL__info containerL__location",children:"picture from one of our date nights <3"})]})]})]})})};var me=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)(j.a,{children:[Object(I.jsx)(k,{}),Object(I.jsxs)(T.c,{children:[Object(I.jsx)(T.a,{path:"/",exact:!0,component:M}),Object(I.jsx)(T.a,{path:"/About",component:F}),Object(I.jsx)(T.a,{path:"/Portfolio",component:te}),Object(I.jsx)(T.a,{path:"/Timeline",component:ae}),Object(I.jsx)(T.a,{path:"/test",component:de})]}),Object(I.jsx)(le,{})]})})};i(57);m.a.render(Object(I.jsx)(me,{}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.b4529969.chunk.js.map