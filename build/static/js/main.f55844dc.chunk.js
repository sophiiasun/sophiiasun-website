(this["webpackJsonpsandbox-testing"]=this["webpackJsonpsandbox-testing"]||[]).push([[0],{25:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var c,s,n,r,i=a(1),o=a.n(i),d=a(26),l=a.n(d),j=a(19),h=a(15),m=a(12),b=a(16),g=a(61),u=Object(g.a)((function(e){return{navBarTransparent:{transition:"0.5s ease",backgroundColor:"rgba(255, 229, 236, 1)"},navBarSolid:{transition:"0.5s ease",backgroundColor:"rgba(255, 229, 236, 0.7)"}}})),p=b.a.nav(c||(c=Object(h.a)(["\n  height:8vh; width:100%;\n  display: flex;\n  justify-content: center; \n  align-items: center; \n  font-size: 2rem; \n  position: fixed;\n  opacity: 100%;\n  top:0;\n  z-index:1000;\n  border-bottom: 0.15vw solid var(--col2);\n"]))),x=Object(b.a)(m.b)(s||(s=Object(h.a)(["\n  color: var(--col0); \n  text-decoration: none; \n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  font-size: 2vh; \n  padding:0.5vw 0.7vw;\n  cursor: pointer;\n  border: 0.15vw solid var(--col0); border-radius: 1.5vmin;  \n  height: auto;\n  width: auto; \n  margin: auto; \n  background-size: 100vw 100vw; \n  transition: 0.5s; \n  justify-content: center;  \n  text-transform:uppercase;\n  &:hover { background-position:50vw 0; color:var(--col1); background:var(--col0) }\n"]))),f=Object(b.a)(m.b)(n||(n=Object(h.a)(["    \n  color: black; \n  justify-self: start;\n  text-decoration: none; \n  font-size: 3vw; \n  margin-left: 0; \n  text-transform: uppercase; \n  -webkit-text-stroke: 0.2vw black;\n  cursor: pointer;\n"]))),O=b.a.div(r||(r=Object(h.a)(["\n  display: grid; \n  grid-template-columns: repeat(5, auto); \n  grid-gap: 10px; \n  list-style: none; \n  text-align: center; \n  font-weight: bold; \n  width: 70vw; \n  height: 80%; \n  justify-content: end;\n"]))),v=(a(40),a.p+"static/media/logo.5ed24666.png"),C=a(2),w=function(){var e=Object(i.useState)("navBarTransparent"),t=Object(j.a)(e,2),a=t[0],c=t[1],s=o.a.useRef();return s.current=a,Object(i.useEffect)((function(){var e=function(){var e=window.scrollY>50;c(e?"navBarSolid":"navBarTransparent")};return document.addEventListener("scroll",e),function(){document.removeEventListener("scroll",e)}}),[]),Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(p,{className:u()[s.current],children:[Object(C.jsx)("img",{src:v,className:"Logo"}),Object(C.jsx)(f,{to:"/",activeStyle:!0,children:"Sophia"}),Object(C.jsxs)(O,{children:[Object(C.jsx)(x,{to:"/About",activeStyle:!0,children:"About"}),Object(C.jsx)(x,{to:"/Portfolio",activeStyle:!0,children:"Portfolio"}),Object(C.jsx)(x,{to:"/Hackathons",activeStyle:!0,children:"Hackathons"})]})]})})},k=(a(41),a(6)),y=(a(42),a(43),a(44),function(){return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{class:"headerContainer",children:[Object(C.jsx)("div",{class:"header",children:Object(C.jsx)("img",{class:"headerImg",src:"./Images/About/me2.jpg"})}),Object(C.jsx)("div",{class:"header",children:"I'm Sophia Sun"})]})})}),I=(a(47),function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{class:"nameContainer",children:Object(C.jsx)("div",{class:"name","data-text":"Welcome",children:"Welcome"})}),Object(C.jsxs)("div",{class:"homeContainer",style:{backgroundImage:'url("./Images/Home/background.png")',backgroundAttachment:"fixed",backgroundSize:"100% 100%"},children:[Object(C.jsxs)("div",{class:"homeCard",children:[Object(C.jsx)("div",{class:"homeCard-face homeCard-face--front",children:Object(C.jsx)("img",{class:"homeCardImg",src:"./Images/Home/boats.jpg"})}),Object(C.jsx)("div",{class:"homeCard-face homeCard-face--back",children:Object(C.jsx)("img",{class:"homeCardImg",src:"./Images/Home/me4.jpg"})})]}),Object(C.jsxs)("div",{class:"homeCard",children:[Object(C.jsx)("div",{class:"homeCard-face homeCard-face--front",children:Object(C.jsx)("img",{class:"homeCardImg",src:"./Images/Home/me6.jpg"})}),Object(C.jsx)("div",{class:"homeCard-face homeCard-face--back",children:Object(C.jsx)("img",{class:"homeCardImg",src:"./Images/Home/me5.jpg"})})]}),Object(C.jsxs)("div",{class:"homeCard",children:[Object(C.jsx)("div",{class:"homeCard-face homeCard-face--front",children:Object(C.jsx)("img",{class:"homeCardImg",src:"./Images/Home/me1.jpg"})}),Object(C.jsx)("div",{class:"homeCard-face homeCard-face--back",children:Object(C.jsx)("img",{class:"homeCardImg",src:"./Images/Home/dog.png"})})]}),Object(C.jsxs)("div",{class:"homeCard",children:[Object(C.jsx)("div",{class:"homeCard-face homeCard-face--front",children:Object(C.jsx)("img",{class:"homeCardImg",src:"./Images/Home/food.jpg"})}),Object(C.jsx)("div",{class:"homeCard-face homeCard-face--back",children:Object(C.jsx)("img",{class:"homeCardImg",src:"./Images/Home/cheers2.jpg"})})]})]})]})}),N=(a(25),function(e){var t=e.header,a=e.body,c=e.imgLink,s=e.date,n=e.github,r=e.devpost;return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("div",{className:"card",children:[Object(C.jsx)("div",{className:"cardImage",children:Object(C.jsx)("img",{src:c})}),Object(C.jsxs)("div",{className:"cardContainer",children:[Object(C.jsxs)("h1",{className:"cardHeader",children:[t," "]}),Object(C.jsx)("h4",{className:"cardBody",children:a}),Object(C.jsx)("button",{className:"cardButton",children:Object(C.jsx)("a",{href:n,children:"View Code"})}),Object(C.jsx)("button",{className:"cardButton",children:Object(C.jsx)("a",{href:r,children:"View Project"})}),Object(C.jsx)("h3",{className:"cardDate",children:s})]})]})})});function H(e){return e.trigger?Object(C.jsx)("div",{className:"popup",children:Object(C.jsxs)("div",{className:"popup-inner",children:[Object(C.jsx)("button",{className:"close-btn",onClick:function(){return e.setTrigger(!1)},children:"Close"}),e.children]})}):""}var S=function(e){var t=e.header,a=e.body,c=e.imgLink,s=e.date,n=e.github,r=(e.devpost,Object(i.useState)(!1)),o=Object(j.a)(r,2),d=o[0],l=o[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(H,{trigger:d,setTrigger:l}),Object(C.jsxs)("div",{className:"card",children:[Object(C.jsx)("div",{className:"cardImage",children:Object(C.jsx)("img",{src:c})}),Object(C.jsxs)("div",{className:"cardContainer",children:[Object(C.jsxs)("h1",{className:"cardHeader",children:[t," "]}),Object(C.jsx)("h4",{className:"cardBody",children:a}),Object(C.jsx)("button",{className:"cardButton",children:Object(C.jsx)("a",{href:n,children:"View Code"})}),Object(C.jsx)("button",{className:"cardButton",onClick:function(){return l(!0)},children:"View Demo"}),Object(C.jsx)("h3",{className:"cardDate",children:s})]})]})]})},B=function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(N,{header:"Chatify",body:"Chatify was a project developed for a Hackathon submission (Hack This Fall 2.0). \nCombining numerous hackathon ideas, Chatify allows users to discuss global issues through socially tough\ntimes like the Covid-19 pandemic. Users can choose to join numerous rooms with different topics, or start\ntheir own room with a new topic. Built with React, Bootstrap, and Firebase.",date:"10/24/2021",github:"https://github.com/sophiiasun/Chatify",devpost:"https://devpost.com/software/chatify-42wgsp"}),Object(C.jsx)(N,{header:"medicap",body:"This project is aimed to help medical professional to access on-the-scene patient \ninformation using face-recognition technology. Implemented using Flask, NodeJS, Python, Tailwind, and Vanilla\nJavascript. User information is stored using an SQL database hosted by Microsoft Azure. Medical \npersonel use face scanning technology to recognize the patient, where Medicapp will retreieve\nhis/her's medical history.",date:"09/19/2021",imgLink:"./Images/Portfolio/MedicApp.jpg",github:"https://github.com/sophiiasun/HTN",devpost:"https://devpost.com/software/medicapp-yd2rwc"}),Object(C.jsx)(S,{header:"minesweeper",body:"Minesweeper game created using HTML, Javascript, and CSS. Functions similar \nto that of traditional minesweeper. Left click to expand a tile and right click to mark a tile. Revealed tiles \nrepresent the number of adjacent (including diagonals) mines, so make sure your brain is on!",date:"04/16/2021",imgLink:"./Images/Portfolio/Minesweeper.png",github:"https://github.com/sophiiasun/Minesweeper"})]})};var L=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsxs)(m.a,{children:[Object(C.jsx)(w,{}),Object(C.jsxs)(k.c,{children:[Object(C.jsx)(k.a,{path:"/",exact:!0,component:I}),Object(C.jsx)(k.a,{path:"/About",component:y}),Object(C.jsx)(k.a,{path:"/Portfolio",component:B})]})]})})};a(48);l.a.render(Object(C.jsx)(L,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.f55844dc.chunk.js.map