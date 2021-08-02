import React from "react";
import { Route, Switch } from "react-router-dom";
import blogs from "../blogs";
import BlogDetail from "../components/blog-detail/BlogDetail";
import CartProducts from "../components/cart/CartProducts";
import ProductDetail from "../components/productDetail/ProductDetail";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import products from "../products";

const showRouteProduct = products.map((product, index) => (
	<Route path={`/shop/${product.id}`} key={index}>
		<ProductDetail product={product} />
	</Route>
));

const showRouteBlog = blogs.map((blog, index) => (
	<Route path={`/blog/${blog.id}`} key={index}>
		<BlogDetail
			title={blog.title}
			avatar={blog.avatar}
			comments={blog.comments}
			views={blog.views}
			day={blog.day}
			month={blog.month}
			author={blog.author}
		/>
	</Route>
));

const Routes1 = () => {
	return (
		<Switch>
			<Route path="/" exact>
				{Home}
			</Route>
			<Route path="/shop" exact>
				{Shop}
			</Route>
			<Route path="'shop/:id" exact>
				(<div>san pham chi tiet</div>)
			</Route>
			<Route path="/blog" exact>
				{Blog}
			</Route>
			<Route path="/about" exact>
				{About}
			</Route>
			<Route path="/contact" exact>
				{Contact}
			</Route>
			<Route path="/cart" exact>
				{CartProducts}
			</Route>
			{showRouteProduct}
			{showRouteBlog}
			<Route path="">
				<p>not found</p>
			</Route>
		</Switch>
	);
};

export default Routes1;
