import React, { useState, useEffect } from 'react';
import { Nav, NavLink, Name, NavMenu, navStyles, NavButton, Resume } from './NavbarElements';
import '../../components/Components.css'
import logo from './logo.png';

const Navbar = () => {
	const [navBackground, setNavBackground] = useState('navBarTransparent')
	const navRef = React.useRef()
	navRef.current = navBackground
	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 50
			if (show) setNavBackground('navBarSolid')
			else setNavBackground('navBarTransparent')
		}
		document.addEventListener('scroll', handleScroll)
		return () => {
			document.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<>
			<Nav className={navStyles()[navRef.current]}>
				<img src={logo} style={{height:'4vw', width:'auto'}} className="Logo" />
				<Name to='/' activeStyle>Sophia</Name>
				<NavMenu>
					<NavLink to='/About' activeStyle>About</NavLink>
					<NavLink to='/Portfolio' activeStyle>Portfolio</NavLink>
					<NavLink to='/Timeline' activeStyle>Timeline</NavLink>
					{/* <NavLink to='/test' activeStyle>test</NavLink> */}
					<Resume href="https://docs.google.com/document/d/198Oz4MNKCiiBoXxQ2upF-lyI5J8inMlG5Ue4pyrW7rM/edit?usp=sharing" target="_blank">Resume</Resume>
				</NavMenu>
			</Nav>
		</>
	)
}

export default Navbar;