import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Import Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import { addProductToCart } from "../../actions";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Products(props) {
	const dispatch = useDispatch();

	function addToCart(product, quantity) {
		dispatch(addProductToCart(product, quantity));
		toast.success("successfull", {
			autoClose: 2000,
		});
	}

	function scrollToTop() {
		window.scrollTo(0, 0);
	}

	const { products } = props;
	const showProduct = products.map((product, index) => (
		<SwiperSlide key={index}>
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
		</SwiperSlide>
	));

	return (
		<section className="products">
			<div className="container">
				<Swiper
					className="mySwiper"
					slidesPerView={2}
					spaceBetween={10}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					loop={true}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					}}
				>
					{showProduct}
				</Swiper>
			</div>
			<ToastContainer />
		</section>
	);
}
