import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../actions";
import Breadcrumb from "../breadcrumbs/Breadcrumb";
import ShowProduct from "../show-product/Show-product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ProductDetail.scss";

const ProductDetail = (props) => {
	const { product } = props;
	let [quantityProduct, setQuantityProduct] = useState(1);
	const dispatch = useDispatch();

	function changeQuantityProductInCart(number) {
		quantityProduct += number;
		if (quantityProduct <= 0) {
			quantityProduct = 1;
		} else {
			setQuantityProduct(quantityProduct);
		}
	}

	function addToCart(product, quantity) {
		dispatch(addProductToCart(product, quantity));
		toast.success("Successfull", {
			autoClose: 2000,
		});
	}

	return (
		<section className="product-detail">
			<Breadcrumb title={product.name} />
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-5 col-sm-12">
						<div className="product-detail__avatar">
							<img src={product.image} alt="avatar" />
						</div>
					</div>
					<div className="col-lg-6 col-md-7 col-sm-12">
						<div className="product-detail__info">
							<h3 className="info__title">{product.name}</h3>
							<p className="info__content">
								Social good making progress catalytic effect diversity social
								responsibility Peace Corps Bloomberg. Safeguards, prevention;
								education crisis management positive social change. Plumpy’nut
								honor planned giving development, Jane Addams justice
								change-makers economic independence think tank.
							</p>
							<span className="info__price">${product.price}</span>
							<div className="info__cart-section">
								<div className="cart__quantity">
									<span className="cart__quantity__current">
										{quantityProduct}
									</span>
									<div className="cart__quantity__change">
										<span onClick={() => changeQuantityProductInCart(1)}>
											+
										</span>
										<span onClick={() => changeQuantityProductInCart(-1)}>
											-
										</span>
									</div>
								</div>
								<button
									onClick={() => addToCart(product, quantityProduct)}
									className="addToCart"
								>
									Add To Cart
								</button>
							</div>
						</div>
					</div>
				</div>
				<h2 className="title">Relate Products</h2>
				<ShowProduct />
				<ToastContainer />
			</div>
		</section>
	);
};

export default ProductDetail;
