import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	changeQuantityProductInCart,
	deleteProductInCart,
} from "../../actions";
import cancel from "./../../images/cancel.png";
import WhenNoProductInCart from "./WhenNoProductInCart";
// Import Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TableCart = () => {
	const cartProducts = useSelector((state) => state.cartProducts);
	const dispatch = useDispatch();

	function handleDeleteProductInCart(product) {
		dispatch(deleteProductInCart(product));
		toast.success("Deleted", {
			autoClose: 2000,
		});
	}

	function handleChangeQuantityProduct(product, number) {
		dispatch(changeQuantityProductInCart(product, number));
	}

	const showProductsInCart = cartProducts.map((product, index) => (
		<tr key={index}>
			<td className="prod-thumbnail">
				<img src={product.image} alt="product" />
			</td>
			<td className="prod-name">{product.name}</td>
			<td className="prod-price">${product.price}</td>
			<td className="prod-quantity">
				<div className="quantity-content">
					<span>{product.quantity}</span>
					<div className="btn-change-quantity">
						<button
							className="plus"
							onClick={() => handleChangeQuantityProduct(product, 1)}
						>
							+
						</button>
						<button
							className="minus"
							onClick={() => handleChangeQuantityProduct(product, -1)}
						>
							-
						</button>
					</div>
				</div>
			</td>
			<td className="prod-total">${product.price * product.quantity}</td>
			<td className="prod-remove">
				<img
					src={cancel}
					alt="cancel"
					onClick={() => handleDeleteProductInCart(product)}
				/>
			</td>
		</tr>
	));

	return (
		<table className="cart-table">
			<thead>
				<tr>
					<th colSpan="2" className="prod-name">
						Item
					</th>
					<th className="prod-price">Price</th>
					<th className="prod-quantity">Quantity</th>
					<th className="prod-total">Total</th>
					<th className="prod-remove"></th>
				</tr>
			</thead>
			<tbody>
				{cartProducts.length === 0 ? (
					<WhenNoProductInCart />
				) : (
					showProductsInCart
				)}
			</tbody>
			<ToastContainer />
		</table>
	);
};

export default TableCart;
