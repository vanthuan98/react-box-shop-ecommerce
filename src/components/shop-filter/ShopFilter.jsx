import React from "react";
import { useDispatch } from "react-redux";
import { changeQuantityProductPerPage } from "../../actions";
import "./ShopFilter.css";

const ShopProduct = () => {
	const dispatch = useDispatch();

	function handleSortProducts(number) {
		const sortCurrent = document.querySelector(".current-sort");
		if (number === 0) {
			sortCurrent.innerText = "Sort by latest";
		} else if (number === 1) {
			sortCurrent.innerText = "Sort by price: low to high";
		} else {
			sortCurrent.innerText = "Sort by price: high to low";
		}
	}

	function handleCurrentQuantity(quantity) {
		const currentQuantity = document.querySelector(".current-quanlity");
		currentQuantity.innerText = quantity;
		dispatch(changeQuantityProductPerPage(quantity));
	}

	return (
		<section className="shop__filter">
			<div className="container">
				<div className="shop__filter-left">
					<div className="filter__grid">
						<box-icon name="grid" type="solid" color="#9e9b9b"></box-icon>
					</div>
					<div className="filter__list">
						<box-icon name="list-ul" color="#9e9b9b"></box-icon>
					</div>
					<div className="filter__sort">
						<p className="current-sort">Sort by latest</p>
						<ul className="value-sort">
							<li className="item-sort" onClick={() => handleSortProducts(0)}>
								Sort by latest
							</li>
							<li className="item-sort" onClick={() => handleSortProducts(1)}>
								Sort by price: low to high
							</li>
							<li className="item-sort" onClick={() => handleSortProducts(2)}>
								Sort by price: high to low
							</li>
						</ul>
					</div>
				</div>
				<div className="shop__filter-right">
					<div className="quantity-product-per-page">
						<p className="current-quantity-product">
							Showing <span className="current-quanlity">10</span> per page
							<box-icon
								name="down-arrow"
								type="solid"
								color="#ffb900"
							></box-icon>
						</p>
						<ul className="quantity-select">
							<li
								className="quantity-value"
								onClick={() => handleCurrentQuantity(10)}
							>
								10
							</li>
							<li
								className="quantity-value"
								onClick={() => handleCurrentQuantity(12)}
							>
								12
							</li>
							<li
								className="quantity-value"
								onClick={() => handleCurrentQuantity(16)}
							>
								16
							</li>
							<li
								className="quantity-value"
								onClick={() => handleCurrentQuantity(20)}
							>
								20
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShopProduct;
