import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./BlogContents.css";

const BlogContents = () => {
	window.scrollTo(0, 0);

	const blogs = useSelector((state) => state.blogsReducer);
	const quantityBlogPerPage = useSelector((state) => state.quantityBlogPerPage);
	const currentPaginationItem = useSelector(
		(state) => state.currentPaginationItemBlog,
	);

	const startBlog = (currentPaginationItem - 1) * quantityBlogPerPage;
	const endBlog = currentPaginationItem * quantityBlogPerPage;

	const blogsShow = blogs.slice(startBlog, endBlog);

	const showBlogs = blogsShow.map((blog, index) => (
		<div className="blog" key={index}>
			<div className="row">
				<div className="col-lg-5 col-md-12">
					<div className="blog__avatar">
						<Link to={`/blog/${blog.id}`}>
							<img src={blog.avatar} alt="blog avatar" />
						</Link>
					</div>
				</div>
				<div className="col-lg-7 col-md-12">
					<div className="blog__info">
						<h3 className="blog__info__title">
							<Link to={`/blog/${blog.id}`}>{blog.title}</Link>
						</h3>
						<div className="blog__info__meta">
							<div className="date-time">
								<span>{blog.day}</span>
								<br />
								<span>{blog.month}</span>
							</div>
							<div className="comments">
								<box-icon name="comment-detail" color="#bbbbbb"></box-icon>
								<span>{blog.comments}</span>
							</div>
							<div className="views">
								<box-icon name="user-voice" color="#bbbbbb"></box-icon>
								<span>{blog.views}</span>
							</div>
							<div className="author">
								<span>Post By</span>
								<span>{blog.author}</span>
							</div>
						</div>
						<div className="excerpt">
							<p>{blog.excerpt}</p>
						</div>
						<Link className="btn-read-more" to={`/blog/${blog.id}`}>
							Read More
						</Link>
					</div>
				</div>
			</div>
		</div>
	));

	return (
		<section className="blog_contents">
			<div className="container">{showBlogs}</div>
		</section>
	);
};

export default BlogContents;
