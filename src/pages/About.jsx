import React from "react";
import AboutContent from "../components/about/AboutContent";
import AboutHeader from "../components/about/AboutHeader";

const About = () => {
	return (
		<section className="about">
			<AboutHeader />
			<AboutContent />
		</section>
	);
};

export default About;
