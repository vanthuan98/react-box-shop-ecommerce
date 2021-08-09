import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import style
import "./Hero.scss";

// import backgroungImage
import bg_hero_1 from "./../../images/hero/bg-shoes-sport-1.jpg";
import bg_hero_2 from "./../../images/hero/bg-shoes-sport-2.jpg";
import bg_hero_3 from "./../../images/hero/bg-shoes-sport-3.jpg";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function SwipperHero() {
	const styleBg = {
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	};
	return (
		<section className="hero-slides">
			<Swiper
				loop={true}
				className="mySwiper"
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
			>
				<SwiperSlide>
					<div
						className="hero__wrapped"
						style={{
							background: `url(${bg_hero_1})`,
							...styleBg,
						}}
					>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12"></div>
								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="hero__content text-right">
										<h1 className="hero__content__title">
											<span>SPORTS</span>
											<br />
											<span>SHOES</span>
											<br />
											<span>FOR WOMEN</span>
										</h1>
										<p className="hero__content__subtitle">
											PURSUE THESE ASPIRATIONS MOBILIZE
										</p>
										<button className="hero__content__btn">SHOP NOW</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className="hero__wrapped"
						style={{
							background: `url(${bg_hero_2})`,
							...styleBg,
						}}
					>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="hero__content text-left">
										<h1 className="hero__content__title">
											<span>SPORTS</span>
											<br />
											<span>SHOES</span>
											<br />
											<span>FOR WOMEN</span>
										</h1>
										<p className="hero__content__subtitle">
											PURSUE THESE ASPIRATIONS MOBILIZE
										</p>
										<button className="hero__content__btn">SHOP NOW</button>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12"></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className="hero__wrapped"
						style={{
							background: `url(${bg_hero_3})`,
							...styleBg,
						}}
					>
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12">
									<div className="hero__content text-left">
										<h1 className="hero__content__title">
											<span>SPORTS</span>
											<br />
											<span>SHOES</span>
											<br />
											<span>FOR WOMEN</span>
										</h1>
										<p className="hero__content__subtitle">
											PURSUE THESE ASPIRATIONS MOBILIZE
										</p>
										<button className="hero__content__btn">SHOP NOW</button>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12"></div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}
