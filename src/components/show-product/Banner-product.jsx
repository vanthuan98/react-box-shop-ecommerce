import React from "react";
import { Link } from "react-router-dom";

import BannerProduct1 from "../../images/hero/shoes-banner-4.jpg";
import BannerProduct2 from "../../images/hero/shoes-banner-5.jpg";
import BannerProduct3 from "../../images/hero/shoes-banner-6.jpg";

const BannerProduct = () => {
	return (
		<section className="banner-product">
			<div className="wrap-banner-product">
				<Link to="/shop">
					<img src={BannerProduct1} alt="banne-product" />
					<span></span>
				</Link>
			</div>
			<div className="wrap-banner-product">
				<Link to="/shop">
					<img src={BannerProduct2} alt="banne-product" />
					<span></span>
				</Link>
			</div>
			<div className="wrap-banner-product">
				<Link to="/shop">
					<img src={BannerProduct3} alt="banne-product" />
					<span></span>
				</Link>
			</div>
		</section>
	);
};

export default BannerProduct;
