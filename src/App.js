import React, { useState }  from "react";
import Jumbotron from './components/Jumbotron.js'
function App() {

	const [activePage, setActivePage] = useState("Home");

	return (
		<div>
			<Navbar setActivePage={setActivePage}/>
			<Jumbotron activePage={activePage}/>
		</div>
	);
}

function Navbar(props) {
	
	function NavItem(props) {
		return (
			<li className={`nav-item col-4 text-${props.align}`}>
				<a href="#" className="btn btn-lg" onClick={(e) => props.setActivePage(e.target.text)}>
					{props.text}
				</a>
			</li>
		);
	}

	return (
		<nav className="nav py-2">
			<ul className="row no-gutters w-100 justify-content-around">
				<NavItem setActivePage={props.setActivePage} text="Home" align="right"/>
				<NavItem setActivePage={props.setActivePage} text="Projects" align="center" />
				<NavItem setActivePage={props.setActivePage} text="Contact" align="left" />
			</ul>
		</nav>
	);
}

export default App;
