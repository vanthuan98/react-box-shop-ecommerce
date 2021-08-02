import React from "react";
import BlogContents from "../components/blog-contents/BlogContents";
import BlogPagination from "../components/blog-pagination/BlogPagination";
import HeaderBlog from "../components/header-blog/HeaderBlog";

const Blog = () => {
	return (
		<main className="blog">
			<HeaderBlog />
			<BlogContents />
			<BlogPagination />
		</main>
	);
};

export default Blog;
