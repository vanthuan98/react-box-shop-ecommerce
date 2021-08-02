import React from "react";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import css
import "./Blogs.css";
import { Link } from "react-router-dom";

export default function Blogs() {
	const blogs = useSelector((state) => state.blogsReducer);

	const showBlogs = blogs.map((blog, index) => (
		<SwiperSlide key={index}>
			<div className="blog-card">
				<div className="blog-avatar">
					<Link to={`/blog/${blog.id}`}>
						<img src={blog.avatar} alt="blog" />
					</Link>
				</div>
				<div className="blog__content">
					<Link to={`/blog/${blog.id}`}>
						<h3 className="blog__title">{blog.title}</h3>
					</Link>
					<div className="meta">
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
					<Link to={`/blog/${blog.id}`} className="btn-read-more">
						Read More
					</Link>
				</div>
			</div>
		</SwiperSlide>
	));

	return (
		<section className="blogs">
			<div className="container">
				<div className="blogs__title">
					<h2>BLOGS</h2>
				</div>
			</div>
			<div className="container">
				<Swiper
					loop={true}
					slidesPerView={1}
					spaceBetween={10}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						640: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					className="mySwiper"
				>
					{showBlogs}
				</Swiper>
			</div>
		</section>
	);
}
