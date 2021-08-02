import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShippingCost } from "../../actions";

const CartTotal = () => {
	const cartProducts = useSelector((state) => state.cartProducts);
	const shippingCost = useSelector((state) => state.shippingCost);
	const dispatch = useDispatch();

	let subTotal = 0;
	cartProducts.forEach(function (product) {
		subTotal += product.quantity * product.price;
	});

	let total = subTotal + shippingCost;
	function handleShippingCost(event) {
		dispatch(setShippingCost(parseInt(event.target.value)));
	}

	return cartProducts.length === 0 ? (
		<div className="cart-total"></div>
	) : (
		<div className="cart-total">
			<h3 className="cart-total_title">Cart Totals</h3>
			<div className="cart-total_info">
				<div className="subtotla">
					<span>Subtotal</span>
					<span>${subTotal}</span>
				</div>
				<div className="shipping">
					<div className="shipping_title">
						<span>Shipping</span>
					</div>
					<div
						className="shipping-content"
						onChange={(event) => handleShippingCost(event)}
					>
						<div className="free-shipping">
							<input
								type="radio"
								value={0}
								name="shipping"
								defaultChecked
								id="shippingCost0"
							/>
							<label for="shippingCost0">Free shipping</label>
						</div>
						<div className="local-pickup">
							<input
								type="radio"
								value={10}
								name="shipping"
								id="shippingCost10"
							/>
							<label for="shippingCost10">
								Local pickup: <strong>$10</strong>
							</label>
						</div>
					</div>
				</div>
				<div className="total">
					<span>Total</span>
					<span>${total}</span>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
