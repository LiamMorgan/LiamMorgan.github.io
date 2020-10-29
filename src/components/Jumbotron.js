import React from "react";
import Home from "./Home.js"
import Projects from "./Projects.js"
import Contact from "./Contact.js"

import { SwitchTransition, CSSTransition } from "react-transition-group";

function Jumbotron(props) {
	const ShowPage = () => {
		if (props.activePage == "Home") {
			return <Home/>
		}
		if (props.activePage == "Projects") {
			return <Projects/>
		}
		if (props.activePage == "Contact") {
			return <Contact/>
		}
	};

	return (
		<div className="jumbo align-items-center d-flex">
			<div className="inner-jumbo justify-content-center text-center">
				<SwitchTransition>
					<CSSTransition
						key={props.activePage}
						timeout={1000}
						classNames="page-transition"
						unmountOnExit
						appear
						addEndListener={(node, done) => {
							node.addEventListener("transitionend", done, false);
						}}>
						{ShowPage()}
					</CSSTransition>
				</SwitchTransition>
			</div>
		</div>
	);
}

export default Jumbotron;
