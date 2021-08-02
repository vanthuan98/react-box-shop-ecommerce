import React from "react";
import "./CartProducts.css";
import CartTotal from "./CartTotal";
import TableCart from "./TableCart";

const CartProducts = () => {
	return (
		<section className="cart-product">
			<div className="container">
				<div className="row">
					<div className="col-lg-9 col-md-12">
						<TableCart />
					</div>
					<div className="col-lg-3 col-md-6">
						<CartTotal />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CartProducts;
