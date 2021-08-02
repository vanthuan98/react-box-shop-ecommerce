import React from "react";
import BannerProduct1 from "../../images/hero/shoes-banner-4.jpg";
import BannerProduct2 from "../../images/hero/shoes-banner-5.jpg";
import BannerProduct3 from "../../images/hero/shoes-banner-6.jpg";

const BannerProduct = () => {
	return (
		<section className="banner-product">
			<div className="wrap-banner-product">
				<a href="/#">
					<img src={BannerProduct1} alt="banne-product" />
					<span></span>
				</a>
			</div>
			<div className="wrap-banner-product">
				<a href="/#">
					<img src={BannerProduct2} alt="banne-product" />
					<span></span>
				</a>
			</div>
			<div className="wrap-banner-product">
				<a href="/#">
					<img src={BannerProduct3} alt="banne-product" />
					<span></span>
				</a>
			</div>
		</section>
	);
};

export default BannerProduct;
