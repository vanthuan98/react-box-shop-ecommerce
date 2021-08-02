import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const links = [
	{
		to: "/",
		lable: "Home",
		exact: "true",
	},
	{
		to: "/shop",
		lable: "Shop",
		exact: "false",
	},
	{
		to: "/blog",
		lable: "Blog",
		exact: "false",
	},
	{
		to: "/about",
		lable: "About",
		exact: "false",
	},
	{
		to: "/contact",
		lable: "Contact",
		exact: "false",
	},
];

const LinkItem = ({ to, lable, exact, toggleMenu }) => {
	const active = useRouteMatch({
		path: to,
		exact: exact,
	});
	return (
		<li>
			<Link to={to} onClick={toggleMenu} className={active ? "active" : ""}>
				{lable}
			</Link>
		</li>
	);
};

const MenuLink = (props) => {
	const toggleMenu = props.toggleMenu;
	return links.map((link, index) => (
		<LinkItem
			to={link.to}
			lable={link.lable}
			toggleMenu={toggleMenu}
			key={index}
			exact={link.exact}
		/>
	));
};
export default MenuLink;
