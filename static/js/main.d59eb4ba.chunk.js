(this["webpackJsonpsandbox-testing"]=this["webpackJsonpsandbox-testing"]||[]).push([[0],{25:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var n,a,i,c,o=s(1),r=s.n(o),d=s(26),h=s.n(d),l=s(19),m=s(15),b=s(12),j=s(16),u=s(61),g=Object(u.a)((function(e){return{navBarTransparent:{transition:"0.5s ease",backgroundColor:"rgba(255, 229, 236, 1)"},navBarSolid:{transition:"0.5s ease",backgroundColor:"rgba(255, 229, 236, 0.7)"}}})),p=j.a.nav(n||(n=Object(m.a)(["\n  height:8vh; width:100%;\n  display: flex;\n  justify-content: center; \n  align-items: center; \n  font-size: 2rem; \n  position: fixed;\n  opacity: 100%;\n  top:0;\n  z-index:1000;\n  border-bottom: 0.15vw solid var(--col2);\n"]))),f=Object(j.a)(b.b)(a||(a=Object(m.a)(["\n  color: var(--col0); \n  text-decoration: none; \n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  font-size: 2vh; \n  padding:0.5vw 0.7vw;\n  cursor: pointer;\n  border: 0.15vw solid var(--col0); border-radius: 1.5vmin;  \n  height: auto;\n  width: auto; \n  margin: auto; \n  background-size: 100vw 100vw; \n  transition: 0.5s; \n  justify-content: center;  \n  text-transform:uppercase;\n  &:hover { background-position:50vw 0; color:var(--col1); background:var(--col0) }\n"]))),x=Object(j.a)(b.b)(i||(i=Object(m.a)(["    \n  color: black; \n  justify-self: start;\n  text-decoration: none; \n  font-size: 3vw; \n  margin-left: 0; \n  text-transform: uppercase; \n  -webkit-text-stroke: 0.2vw black;\n  cursor: pointer;\n"]))),v=j.a.div(c||(c=Object(m.a)(["\n  display: grid; \n  grid-template-columns: repeat(5, auto); \n  grid-gap: 10px; \n  list-style: none; \n  text-align: center; \n  font-weight: bold; \n  width: 70vw; \n  height: 80%; \n  justify-content: end;\n"]))),O=(s(40),s.p+"static/media/logo.5ed24666.png"),w=s(2),y=function(){var e=Object(o.useState)("navBarTransparent"),t=Object(l.a)(e,2),s=t[0],n=t[1],a=r.a.useRef();return a.current=s,Object(o.useEffect)((function(){var e=function(){var e=window.scrollY>50;n(e?"navBarSolid":"navBarTransparent")};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(p,{className:g()[a.current],children:[Object(w.jsx)("img",{src:O,className:"Logo"}),Object(w.jsx)(x,{to:"/",activeStyle:!0,children:"Sophia"}),Object(w.jsxs)(v,{children:[Object(w.jsx)(f,{to:"/About",activeStyle:!0,children:"About"}),Object(w.jsx)(f,{to:"/Portfolio",activeStyle:!0,children:"Portfolio"}),Object(w.jsx)(f,{to:"/Hackathons",activeStyle:!0,children:"Hackathons"})]})]})})},C=(s(41),s(6)),k=(s(42),s(43),s(44),function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{class:"headerContainer",children:[Object(w.jsx)("div",{class:"header",children:Object(w.jsx)("img",{class:"headerImg",src:"./Images/About/me2.jpg"})}),Object(w.jsx)("div",{class:"header",children:"I'm Sophia Sun"})]})})}),I=(s(47),function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{class:"nameContainer",children:Object(w.jsx)("div",{class:"name","data-text":"Welcome",children:"Welcome"})}),Object(w.jsxs)("div",{class:"homeContainer",style:{backgroundImage:'url("./sophiiasun-website/Images/Home/background.png")',backgroundAttachment:"fixed",backgroundSize:"100% 100%"},children:[Object(w.jsxs)("div",{class:"homeCard",children:[Object(w.jsx)("div",{class:"homeCard-face homeCard-face--front",children:Object(w.jsx)("img",{class:"homeCardImg",src:"./sophiiasun-website/Images/Home/boats.jpg"})}),Object(w.jsx)("div",{class:"homeCard-face homeCard-face--back",children:Object(w.jsx)("img",{class:"homeCardImg",src:"./sophiiasun-website/Images/Home/me4.jpg"})})]}),Object(w.jsxs)("div",{class:"homeCard",children:[Object(w.jsx)("div",{class:"homeCard-face homeCard-face--front",children:Object(w.jsx)("img",{class:"homeCardImg",src:"./sophiiasun-website/Images/Home/me6.jpg"})}),Object(w.jsx)("div",{class:"homeCard-face homeCard-face--back",children:Object(w.jsx)("img",{class:"homeCardImg",src:"./sophiiasun-website/Images/Home/me5.jpg"})})]}),Object(w.jsxs)("div",{class:"homeCard",children:[Object(w.jsx)("div",{class:"homeCard-face homeCard-face--front",children:Object(w.jsx)("img",{class:"homeCardImg",src:"./sophiiasun-website/Images/Home/me1.jpg"})}),Object(w.jsx)("div",{class:"homeCard-face homeCard-face--back",children:Object(w.jsx)("img",{class:"homeCardImg",src:"./sophiiasun-website/Images/Home/dog.png"})})]}),Object(w.jsxs)("div",{class:"homeCard",children:[Object(w.jsx)("div",{class:"homeCard-face homeCard-face--front",children:Object(w.jsx)("img",{class:"homeCardImg",src:"./sophiiasun-website/Images/Home/food.jpg"})}),Object(w.jsx)("div",{class:"homeCard-face homeCard-face--back",children:Object(w.jsx)("img",{class:"homeCardImg",src:"./sophiiasun-website/Images/Home/cheers2.jpg"})})]})]})]})}),N=(s(25),function(e){var t=e.header,s=e.body,n=e.imgLink,a=e.date,i=e.github,c=e.devpost;return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{className:"card",children:[Object(w.jsx)("div",{className:"cardImage",children:Object(w.jsx)("img",{src:n})}),Object(w.jsxs)("div",{className:"cardContainer",children:[Object(w.jsxs)("h1",{className:"cardHeader",children:[t," "]}),Object(w.jsx)("h4",{className:"cardBody",children:s}),Object(w.jsx)("button",{className:"cardButton",children:Object(w.jsx)("a",{href:i,children:"View Code"})}),Object(w.jsx)("button",{className:"cardButton",children:Object(w.jsx)("a",{href:c,children:"View Project"})}),Object(w.jsx)("h3",{className:"cardDate",children:a})]})]})})});function S(e){return e.trigger?Object(w.jsx)("div",{className:"popup",children:Object(w.jsxs)("div",{className:"popup-inner",children:[Object(w.jsx)("button",{className:"close-btn",onClick:function(){return e.setTrigger(!1)},children:"Close"}),e.children]})}):""}var L=function(e){var t=e.header,s=e.body,n=e.imgLink,a=e.date,i=e.github,c=(e.devpost,Object(o.useState)(!1)),r=Object(l.a)(c,2),d=r[0],h=r[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(S,{trigger:d,setTrigger:h}),Object(w.jsxs)("div",{className:"card",children:[Object(w.jsx)("div",{className:"cardImage",children:Object(w.jsx)("img",{src:n})}),Object(w.jsxs)("div",{className:"cardContainer",children:[Object(w.jsxs)("h1",{className:"cardHeader",children:[t," "]}),Object(w.jsx)("h4",{className:"cardBody",children:s}),Object(w.jsx)("button",{className:"cardButton",children:Object(w.jsx)("a",{href:i,children:"View Code"})}),Object(w.jsx)("button",{className:"cardButton",onClick:function(){return h(!0)},children:"View Demo"}),Object(w.jsx)("h3",{className:"cardDate",children:a})]})]})]})},M=function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)(N,{header:"Chatify",body:"Chatify was a project developed for a Hackathon submission (Hack This Fall 2.0). \nCombining numerous hackathon ideas, Chatify allows users to discuss global issues through socially tough\ntimes like the Covid-19 pandemic. Users can choose to join numerous rooms with different topics, or start\ntheir own room with a new topic. Built with React, Bootstrap, and Firebase.",date:"10/24/2021",imgLink:"./Images/Portfolio/MedicApp.jpg",github:"https://github.com/sophiiasun/Chatify",devpost:"https://devpost.com/software/chatify-42wgsp"}),Object(w.jsx)(N,{header:"medicap",body:"This project is aimed to help medical professional to access on-the-scene patient \ninformation using face-recognition technology. Implemented using Flask, NodeJS, Python, Tailwind, and Vanilla\nJavascript. User information is stored using an SQL database hosted by Microsoft Azure. Medical \npersonel use face scanning technology to recognize the patient, where Medicapp will retreieve\nhis/her's medical history.",date:"09/19/2021",imgLink:"./sophiiasun-website/Images/Portfolio/MedicApp.jpg",github:"https://github.com/sophiiasun/HTN",devpost:"https://devpost.com/software/medicapp-yd2rwc"}),Object(w.jsx)(N,{header:"vibot",body:"ViBot was a project created by my team and I during a hackathon called 'YRHacks' in 2021. \nIt analyzes a user's message using NLTK Sentiment Analysis software, and was implemented using Discord API with\n Python 3.9. The database is scripted with SQL, hosted by Microsoft Azure.",date:"04/24/2021",imgLink:"./Images/Portfolio/Minesweeper.png",github:"https://github.com/sophiiasun/Minesweeper"}),Object(w.jsx)(L,{header:"minesweeper",body:"Minesweeper game created using HTML, Javascript, and CSS. Functions similar \nto that of traditional minesweeper. Left click to expand a tile and right click to mark a tile. Revealed tiles \nrepresent the number of adjacent (including diagonals) mines, so make sure your brain is on!",date:"04/16/2021",imgLink:"./Images/Portfolio/Minesweeper.png",github:"https://github.com/sophiiasun/Minesweeper"}),Object(w.jsx)(N,{header:"Dominoes",body:"An interactive Dominoes Game created using Python 3.4. Implements GUI using Tkinter \n library import and combined several Python source code files. Brute force is used to determine computer \n playable moves and to determine victories/losses.",date:"06/20/2020",imgLink:"./Images/Portfolio/Minesweeper.png",github:"https://github.com/sophiiasun/Minesweeper"}),Object(w.jsx)(N,{header:"Rock, Paper, Scissors!",body:"An interactive game created using Arduino Uno CPU 2020 Version (scripted in C++). Hardware \nincludes LCD display, potentiometer, buzzer, buttons, etc. Tracks the score for player against computer, first \nto five wins.",date:"06/19/2020",imgLink:"./Images/Portfolio/Minesweeper.png",github:"https://github.com/sophiiasun/Minesweeper"}),Object(w.jsx)(N,{header:"Infinite Recharge",body:"Participated in FIRST Robotics with High School team (Milliken Silver Knight 7735). \nDesigned hardware and scripted software code. Everybot supports both automated movements and remote-controlled. \nDeveloped using Java 11 and FRC Robotics Research Library.",date:"03/22/2020",imgLink:"./Images/Portfolio/Minesweeper.png",github:"https://github.com/sophiiasun/Minesweeper"}),Object(w.jsx)(N,{header:"Vex IQ Robotics",body:"A mini-bot built from VEX IQ and coded with VEXcode blocks, using components such as an \noptical sensor, touch LEDs, bumpers, distance sensors, etc. The robot traverses a terrain to pick up and place \nthree scattered boxes from start (top left) to finish (bottom right).",date:"11/20/2019",imgLink:"./Images/Portfolio/Minesweeper.png",github:"https://github.com/sophiiasun/Minesweeper"})]})};var H=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsxs)(b.a,{children:[Object(w.jsx)(y,{}),Object(w.jsxs)(C.c,{children:[Object(w.jsx)(C.a,{path:"/",exact:!0,component:I}),Object(w.jsx)(C.a,{path:"/About",component:k}),Object(w.jsx)(C.a,{path:"/Portfolio",component:M})]})]})})};s(48);h.a.render(Object(w.jsx)(H,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.d59eb4ba.chunk.js.map