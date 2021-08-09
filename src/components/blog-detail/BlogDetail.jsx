import React from "react";
import { Link } from "react-router-dom";
import "./BlogDetail.scss";

const BlogDetail = (props) => {
	window.scrollTo(0, 0);
	const { title, avatar, comments, views, day, month, author } = props;
	return (
		<section className="blog-detail">
			<section className="blog__header">
				<div className="container">
					<h1>BLOGS</h1>
					<div className="breadcrumb-blog">
						<Link to="/">Home</Link>
						<span>{">"}</span>
						<Link to="/blog">Blog</Link>
						<span>{">"}</span>
						<span className="breadcrumb-blog__title">{title}</span>
					</div>
				</div>
			</section>
			<section className="blog__content">
				<div className="container">
					<div className="row">
						<div className="col-lg-9 col-md-12">
							<div className="blog__content__title">
								<h1>{title}</h1>
							</div>
							<div className="blog__content__avatar">
								<img src={avatar} alt={title} />
							</div>
							<div className="blog__info__meta">
								<div className="date-time">
									<span>{day}</span>
									<br />
									<span>{month}</span>
								</div>
								<div className="comments">
									<box-icon name="comment-detail" color="#bbbbbb"></box-icon>
									<span>{comments}</span>
								</div>
								<div className="views">
									<box-icon name="user-voice" color="#bbbbbb"></box-icon>
									<span>{views}</span>
								</div>
								<div className="author">
									<span>Post By</span>
									<span>{author}</span>
								</div>
							</div>
							<div className="blog__content__description">
								<p>
									Solve challenges tAction Against Hunger citizenry Martin
									Luther King Jr. Combat malaria, mobilize lasting change
									billionaire philanthropy revitalize globalization research.
									Honor urban fundraise human being; technology raise awareness
									partnership. Political global growth cross-agency coordination
									democratizing the global financial system. Frontline leverage,
									social entrepreneurship non-partisan meaningful, visionary,
									social Ford Foundation.
								</p>
								<p>
									Best practices disruptor catalyst public sector; protect
									micro-finance educate. Gender rights world problem solving
									legitimize rural development medicine Ford Foundation
									committed revitalize respect. Affordable health care,
									humanitarian.
								</p>
								<p>
									Time of extraordinary change necessities; participatory
									monitoring safeguards Bill and Melinda Gates celebrate combat
									poverty working alongside. Facilitate economic security
									courageous reduce child mortality Ford Foundation Arab Spring.
									Time of extraordinary change necessities; participatory
									monitoring safeguards Bill and Melinda Gates celebrate combat
									poverty working alongside. Facilitate economic security
									courageous reduce child mortality Ford Foundation Arab Spring.
								</p>
								<p>
									Best practices disruptor catalyst public sector; protect
									micro-finance educate. Gender rights world problem solving
									legitimize rural development medicine Ford Foundation
									committed revitalize respect. Affordable health care,
									humanitarian.
								</p>
								<p>
									Time of extraordinary change necessities; participatory
									monitoring safeguards Bill and Melinda Gates celebrate combat
									poverty working alongside. Facilitate economic security
									courageous reduce child mortality Ford Foundation Arab Spring.
									Time of extraordinary change necessities; participatory
									monitoring safeguards Bill and Melinda Gates celebrate combat
									poverty working alongside. Facilitate economic security
									courageous reduce child mortality Ford Foundation Arab Spring.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default BlogDetail;
