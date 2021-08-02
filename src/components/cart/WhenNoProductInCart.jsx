import React from "react";
import { Link } from "react-router-dom";

const WhenNoProductInCart = () => {
	return (
		<div className="no-product-in-cart">
			<p>Your cart is currently empty</p>
			<Link to="/shop">Return To Shop</Link>
		</div>
	);
};

export default WhenNoProductInCart;
