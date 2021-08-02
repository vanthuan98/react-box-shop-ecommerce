import React from "react";
import "./bootstrap-grid.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const Layout = () => {
	return (
		<div className="layout" style={{ overflow: "hidden" }}>
			<Header />
			<Footer />
		</div>
	);
};

export default Layout;
