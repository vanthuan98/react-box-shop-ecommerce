import React from "react";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ShopProduct from "../components/shop-products/ShopProducts";
import ShopFilter from "../components/shop-filter/ShopFilter";
import ShopPagination from "../components/shop-pagination/ShopPagination";

const Shop = () => {
	return (
		<section className="shop">
			<Breadcrumb title={"All"} />
			<ShopFilter />
			<ShopProduct />
			<ShopPagination />
		</section>
	);
};

export default Shop;
