import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import Home from "../pages/Home";

const Routes = () => {
	return <Switch>{showRoute()}</Switch>;
};

const routes = [
	{
		to: "/",
		exact: true,
		component: () => <Home />,
	},
	{
		to: "/shop",
		exact: false,
		component: () => <Shop />,
	},
	{
		to: "/blog",
		exact: false,
		component: () => <Blog />,
	},
	{
		to: "/about",
		exact: false,
		component: () => <About />,
	},
	{
		to: "/contact",
		exact: true,
		component: () => <Contact />,
	},
];

const showRoute = () => {
	routes.map((route, index) => {
		return (
			<Route
				key={index}
				path={route.to}
				exact={route.exact}
				component={route.component}
			/>
		);
	});
};

export default Routes;
