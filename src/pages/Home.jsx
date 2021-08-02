import React from "react";
import Blogs from "../components/blogs/Blogs";
import BannerHero from "../components/hero/BannerHero";
import SwipperHero from "../components/hero/SwipperHero";
import ProductNewArrivals from "../components/new-arrivals/ProductNewArrivals";
import ShowProduct from "../components/show-product/Show-product";
import UpcomingDiscount from "../components/upcoming-discount/UpcomingDiscount";

const Home = () => {
	return (
		<main className="main">
			<SwipperHero />
			<BannerHero />
			<ShowProduct />
			<ProductNewArrivals />
			<UpcomingDiscount />
			<Blogs />
		</main>
	);
};

export default Home;
