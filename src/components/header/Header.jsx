import "boxicons";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import MenuLink from "../../Routes/MenuLink";
import Routes1 from "../../Routes/Routes1";
import logo from "./../../images/logo.png";
import "./Header.scss";

function toggleMenu() {
	let menu = document.querySelector(".menu");
	menu.classList.value.indexOf("active") === -1
		? menu.classList.add("active")
		: menu.classList.remove("active");
	window.scrollTo(0, 0);
}

const Header = () => {
	const cartProducts = useSelector((state) => state.cartProducts);

	let quantityProductInCart = 0;
	cartProducts.forEach(
		(product) => (quantityProductInCart += product.quantity),
	);

	window.onscroll = function () {
		const headerElement = document.querySelector(".header");
		if (window.scrollY > 100) {
			headerElement.style.padding = "0";
			headerElement.style.position = "fixed";
		} else {
			headerElement.style.padding = "1rem 0";
			headerElement.style.position = "inherit";
		}
	};

	function scrollToTop() {
		window.scrollTo(0, 0);
	}

	return (
		<Router>
			<header className="header">
				<div className="container">
					<Link to="/" className="logo" onClick={scrollToTop}>
						<img src={logo} alt="logo" />
					</Link>
					<nav className="nav">
						<div className="menu-mobile" onClick={toggleMenu}>
							<box-icon name="menu-alt-right" color="#ffffff" />
						</div>
						<ul className="menu">
							<MenuLink toggleMenu={toggleMenu} />
							<Link to="/cart" className="cart" onClick={toggleMenu}>
								<box-icon name="cart-add" type="solid" color="#ffb900" />
								<span>{quantityProductInCart}</span>
							</Link>
						</ul>
					</nav>
				</div>
			</header>
			<Routes1 />
		</Router>
	);
};

export default Header;
