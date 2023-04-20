import React from 'react'
import '../style/Navbar.css'
// import '../components/script'


const Navbar = () => {
  return (
    <nav>
		<ul class="nav-menu">
			<li class="nav-item"><a href="#">Home</a></li>
			<li class="nav-item dropdown">
				<a href="#" data-action="dropdown-toggle">FOR AUTHORS</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Project 1</a>
					<a class="dropdown-item" href="#">Project 2</a>
					<a class="dropdown-item" href="#">Project 3</a>
				</div>
			</li>
            <li class="nav-item dropdown">
				<a href="#" data-action="dropdown-toggle">SPECIAL SESSIONS</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Project 1</a>
					<a class="dropdown-item" href="#">Project 2</a>
					<a class="dropdown-item" href="#">Project 3</a>
				</div>
			</li>
            <li class="nav-item dropdown">
				<a href="#" data-action="dropdown-toggle">KEYNOTES</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Project 1</a>
					<a class="dropdown-item" href="#">Project 2</a>
					<a class="dropdown-item" href="#">Project 3</a>
				</div>
			</li>
            <li class="nav-item dropdown">
				<a href="#" data-action="dropdown-toggle">TUTORIALS</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Project 1</a>
					<a class="dropdown-item" href="#">Project 2</a>
					<a class="dropdown-item" href="#">Project 3</a>
				</div>
			</li>
            <li class="nav-item dropdown">
				<a href="#" data-action="dropdown-toggle">SCHEDULE</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Project 1</a>
					<a class="dropdown-item" href="#">Project 2</a>
					<a class="dropdown-item" href="#">Project 3</a>
				</div>
			</li>
            <li class="nav-item dropdown">
				<a href="#" data-action="dropdown-toggle">REGISTRATION</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Project 1</a>
					<a class="dropdown-item" href="#">Project 2</a>
					<a class="dropdown-item" href="#">Project 3</a>
				</div>
			</li>
            <li class="nav-item dropdown">
				<a href="#" data-action="dropdown-toggle">SPONSORSHIP</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Project 1</a>
					<a class="dropdown-item" href="#">Project 2</a>
					<a class="dropdown-item" href="#">Project 3</a>
				</div>
			</li>
            <li class="nav-item dropdown">
				<a href="#" data-action="dropdown-toggle">COMMITTEES</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Project 1</a>
					<a class="dropdown-item" href="#">Project 2</a>
					<a class="dropdown-item" href="#">Project 3</a>
				</div>
			</li>
            <li class="nav-item dropdown">
				<a href="#" data-action="dropdown-toggle">CONTACT US</a>
				<div class="dropdown-menu">
					<a class="dropdown-item" href="#">Project 1</a>
					<a class="dropdown-item" href="#">Project 2</a>
					<a class="dropdown-item" href="#">Project 3</a>
				</div>
			</li>
		</ul>
	</nav>
  )
}

export default Navbar