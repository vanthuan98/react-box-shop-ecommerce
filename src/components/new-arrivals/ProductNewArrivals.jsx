import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../actions";
import "./ProductNewArrivals.css";

const ProductNewArrivals = () => {
	const products = useSelector((state) => state.productsReducer);
	const showProduct = products.slice(0, 8);
	const dispatch = useDispatch();

	function addToCart(product, quantity) {
		dispatch(addProductToCart(product, quantity));
	}

	function scrollToTop() {
		window.scrollTo(0, 0);
	}

	return (
		<section className="new-arrivals">
			<div className="container">
				<div className="new-arrivals__title">
					<h2>NEW ARRIVALS</h2>
				</div>
				<div className="new-arrivals__products">
					<div className="row">
						{showProduct.map((product, index) => (
							<div className="col-lg-3 col-md-4 col-sm-6 col-6" key={index}>
								<div className="card-product">
									<div className="product-avatar">
										<Link to={`/shop/${product.id}`} onClick={scrollToTop}>
											<img src={product.image} alt="product" />
										</Link>
									</div>
									<div className="product-info">
										<h3 className="product-info__title">
											<Link onClick={scrollToTop} to={`/shop/${product.id}`}>
												{product.name}
											</Link>
										</h3>
										<span className="product-info__price">
											${product.price}
										</span>
										<button
											className="product-info__btn-atc"
											onClick={() => addToCart(product, 1)}
										>
											Add To Cart
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductNewArrivals;
