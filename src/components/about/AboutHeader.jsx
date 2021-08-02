import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

const AboutHeader = () => {
	return (
		<div className="about__header">
			<div className="container">
				<h1>BLOGS</h1>
				<div className="breadcrumb-about">
					<Link to="/">Home</Link>
					<span>{">"}</span>
					<Link to="/about">About</Link>
				</div>
			</div>
		</div>
	);
};

export default AboutHeader;
