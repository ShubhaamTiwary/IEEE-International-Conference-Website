import React, { useEffect } from 'react'
import '../style/Navbar.css'
// import '../components/script'

const Navbar = () => {
	useEffect(() =>{
	let hamburger = document.querySelector('.hamburger')
	let mobileNav = document.querySelector('.nav-list')
	let bars = document.querySelectorAll('.hamburger span')

	window.addEventListener('resize', function(){
		addRequiredClass();
	})

	function addRequiredClass() {
		if (window.innerWidth < 860) {
			document.body.classList.add('mobile')
		} else {
			document.body.classList.remove('mobile') 
		}
	}

	window.onload = addRequiredClass
	let isActive = false

	hamburger.addEventListener('click', function() {
		mobileNav.classList.toggle('open')
		if(!isActive) {
			bars[0].style.transform = 'rotate(45deg)'
			bars[1].style.opacity = '0'
			bars[2].style.transform = 'rotate(-45deg)'
			isActive = true
		} else {
			bars[0].style.transform = 'rotate(0deg)'
			bars[1].style.opacity = '1'
			bars[2].style.transform = 'rotate(0deg)'
			isActive = false
		}
	})
},[])
  return (
	<nav>
	<div class="container nav-wrapper">
		<div class="hamburger">
			<span></span>x
			<span></span>
			<span></span>
		</div>
		<ul class="nav-list">
		<li>
				<a href="#">HOME</a>
			</li>
			<li>
				<a href="#">FOR AUTHORS</a>
				<ul class="dropdown-list">
					<li><a href="#">Call for Paper</a></li>
					<li><a href="#">Important Dates</a></li>
				</ul>
			</li>
			<li>
				<a href="#">SPECIAL SESSION</a>
				<ul class="dropdown-list">
					<li><a href="#">SPECIAL SESSION-1</a></li>
					<li><a href="#">SPECIAL SESSION-2</a></li>
					<li><a href="#">SPECIAL SESSION-3</a></li>
				</ul>
			</li>
			<li>
				<a href="#">KEYNOTES</a>
			</li>
			<li>
				<a href="#">TUTORIALS</a>
				<ul class="dropdown-list">
					<li><a href="#">TUTORIALS-1</a></li>
					<li><a href="#">TUTORIALS-2</a></li>
					<li><a href="#">TUTORIALS-3</a></li>
				</ul>
			</li>
			<li>
				<a href="#">SCHEDULE</a>
			</li>
			<li>
				<a href="#">REGISTRATION</a>
			</li>
			<li>
				<a href="#">SPONSORSHIP</a>
			</li>
			<li>
				<a href="#">COMMITTEES</a>
			</li>
			<li>
				<a href="#">CONTACT US</a>
				<ul class="dropdown-list">
					<li><a href="#">CONTACT US-1</a></li>
					<li><a href="#">CONTACT US-2</a></li>
					<li><a href="#">CONTACT US-3</a></li>
				</ul>
			</li>
		</ul>
	</div>
</nav>
  )
}

export default Navbar