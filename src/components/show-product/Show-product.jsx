import React, { useState } from "react";
import { useSelector } from "react-redux";
import BannerProduct from "./Banner-product";
import Products from "./Products";
import "./Show-product.css";

const ShowProduct = () => {
	const products = useSelector((state) => state.productsReducer);
	const [tabIndex, setTabIndex] = useState(0);

	const productsShow = [];

	for (let index = 0; index < products.length; index++) {
		if (tabIndex === 0 && index < 5) {
			productsShow.push(products[index]);
		} else if (tabIndex === 1 && index >= 5 && index < 10) {
			productsShow.push(products[index]);
		} else if (tabIndex === 2 && index >= 10 && index < 15) {
			productsShow.push(products[index]);
		}
	}

	const handleClickShowTab = (index) => {
		const tabItem = document.querySelectorAll(".tabs-show__item");
		tabItem.forEach((item) => {
			item.classList.remove("active");
		});
		tabItem[index].classList.add("active");
		setTabIndex(index);
	};

	return (
		<section className="show-product">
			<div className="container">
				<div className="nav-tab-show">
					<ul className="tabs-show">
						<li
							className="tabs-show__item active"
							onClick={() => handleClickShowTab(0)}
						>
							BEST SELLING
						</li>
						<li
							className="tabs-show__item"
							onClick={() => handleClickShowTab(1)}
						>
							FEATURED PRODUCTS
						</li>
						<li
							className="tabs-show__item"
							onClick={() => handleClickShowTab(2)}
						>
							NEW ARRIVALS
						</li>
					</ul>
				</div>
				<Products products={productsShow} />
			</div>
			<BannerProduct />
		</section>
	);
};

export default ShowProduct;
