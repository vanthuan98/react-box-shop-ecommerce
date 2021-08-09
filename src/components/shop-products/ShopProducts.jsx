import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ShopProducts.scss";

const ShopProducts = () => {
	const dispatch = useDispatch();

	function addToCart(product, quantity) {
		dispatch(addProductToCart(product, quantity));
		toast.success("successful", {
			autoClose: 2000,
		});
	}

	function scrollToTop() {
		window.scrollTo(0, 0);
	}

	const products = useSelector((state) => state.productsReducer);
	const quantityProductPerPage = useSelector(
		(state) => state.quantityProductPerPage,
	);
	const currentPaginationItem = useSelector(
		(state) => state.currentPaginationItemProduct,
	);

	const startProduct = (currentPaginationItem - 1) * quantityProductPerPage;
	const endProduct = currentPaginationItem * quantityProductPerPage;

	const productsShow = products.slice(startProduct, endProduct);

	const showProducts = productsShow.map((product, index) => (
		<div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
			<div className="card-product">
				<div className="product-avatar">
					<Link to={`/shop/${product.id}`} onClick={scrollToTop}>
						<img src={product.image} alt="product" />
					</Link>
				</div>
				<div className="product-info">
					<h3 className="product-info__title">
						<Link to={`/shop/${product.id}`} onClick={scrollToTop}>
							{product.name}
						</Link>
					</h3>
					<span className="product-info__price">${product.price}</span>
					<button
						className="product-info__btn-atc"
						onClick={() => addToCart(product, 1)}
					>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	));

	return (
		<section className="shopReducer-products">
			<div className="container">
				<div className="row">{showProducts}</div>
			</div>
			<ToastContainer />
		</section>
	);
};

export default ShopProducts;
