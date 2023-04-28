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
				<a href="#">COMMITTEE</a>
			</li>
			<li>
				<a href="#">KEYNOTES</a>
			</li>
			<li>
				<a href="#">REGISTRATION</a>
			</li>
			<li>
				<a href="#">PAPER SUBMISSION</a>
				<ul class="dropdown-list">
					<li><a href="#">Authors Guidelines</a></li>
					<li><a href="#">Paper Template</a></li>
					<li><a href="#">Schedule</a></li>
					<li><a href="#">FAQs</a></li>
				</ul>
			</li>
			<li>
				<a href="#">CALL FOR PAPERS</a>
			</li>
			<li>
				<a href="#">PUBLICATION</a>
			</li>
			<li>
				<a href="#">SPECIAL SESSION</a>
			</li>
			<li>
				<a href="#">OUR ASSOCIATE & SPONSORS </a>
			</li>
		</ul>
	</div>
</nav>
  )
}

export default Navbar