import React from "react";
import { Link } from "react-router-dom";

import "./Breadcrumb.scss";

const Breadcrumb = (props) => {
	const { title } = props;
	return (
		<section className="breadcrumb">
			<div className="container">
				<Link className="breadcrumb_home" to="/">
					Home
				</Link>
				<span>{">"}</span>
				<Link className="breadcrumb_shop" to="/shop">
					Shop
				</Link>
				<span>{">"}</span>
				<span>{title}</span>
			</div>
		</section>
	);
};

export default Breadcrumb;
