import React from "react";
import { Link } from "react-router-dom";
import "./HeaderBlog.css";

const HeaderBlog = () => {
	return (
		<section className="blog__header">
			<div className="container">
				<h1>BLOGS</h1>
				<div className="breadcrumb-blog">
					<Link to="/">Home</Link>
					<span>{">"}</span>
					<Link to="/blog">Blog</Link>
				</div>
			</div>
		</section>
	);
};

export default HeaderBlog;
