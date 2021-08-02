import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const ContactHeader = () => {
	return (
		<div className="contact__header">
			<div className="container">
				<h1>BLOGS</h1>
				<div className="breadcrumb-contact">
					<Link to="/">Home</Link>
					<span>{">"}</span>
					<Link to="/contact">Contact</Link>
				</div>
			</div>
		</div>
	);
};

export default ContactHeader;
