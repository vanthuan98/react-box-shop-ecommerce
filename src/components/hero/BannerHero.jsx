import React from "react";
import bannerHero1 from "../../images/hero/shoes-banner-1.jpg";
import bannerHero2 from "../../images/hero/shoes-banner-2.jpg";
import bannerHero3 from "../../images/hero/shoes-banner-3.jpg";
import "./Hero.scss";

const BannerHero = () => {
	window.scrollTo(0, 0);

	return (
		<section className="banner-hero">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="banner-hero__wrapped banner-1">
							<a href="/#">
								<img src={bannerHero1} alt="banner" />
								<span></span>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="banner-hero__wrapped banner-2">
							<a href="/#">
								<img src={bannerHero2} alt="banner" />
								<span></span>
							</a>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="banner-hero__wrapped banner-3">
							<a href="/#">
								<img src={bannerHero3} alt="banner" />
								<span></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BannerHero;
