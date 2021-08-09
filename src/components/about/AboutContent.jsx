import React from "react";
import { Link } from "react-router-dom";
import about1 from "../../images/about/about-us-product.jpg";
import "./About.scss";

const AboutContent = () => {
	function scrollToTop() {
		window.scrollTo(0, 0);
	}

	return (
		<div className="about__content">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-7 col-sm-12">
						<div className="about_content_wrap">
							<h4>WHO ARE WE ?</h4>
							<blockquote>
								&emsp; Our grantees and partners generosity truth, prevention
								nutrition involvement Ford Foundation. Enabler agenda results
								global leaders change economic independence; positive social
								change free expression our ambitions. Dedicated, humanitarian
								relief health fight against malnutrition momentum economic
								development. Vaccines, citizenry collaborative, harness
								non-partisan civic engagement fighting.
							</blockquote>
							<Link to="/contact" onClick={scrollToTop}>
								Contact US Now
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-5 col-sm-12">
						<div className="about_img">
							<img src={about1} alt="about" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContent;
