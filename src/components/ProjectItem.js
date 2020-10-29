import React from "react";

export default function ProjectItem(props) {
	return (
		<div className="col-sm-12 col-md-6 col-lg-3 mb-3 mx-1">
			<a href={props.link}>
				<div className="card border-dark bg-secondary text-white">
					<div className="card-header">
						<h3 className="card-title">{props.title}</h3>
					</div>
					<img
						className="card-img"
						src={props.image}
						alt="project card image"
					/>
					<div className="card-body">
						<h5 className="card-text">{props.description}</h5>
					</div>
					<div className="card-footer bg-dark">
						<small>{props.footer}</small>
					</div>
				</div>
			</a>
		</div>
	);
}
