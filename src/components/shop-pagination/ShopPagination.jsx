import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPaginationItemProduct } from "../../actions";
import "./ShopPagination.css";

const ShopPagination = () => {
	const products = useSelector((state) => state.productsReducer);

	const quantityProductPerPage = useSelector(
		(state) => state.quantityProductPerPage,
	);
	const dispatch = useDispatch();

	const lengthPagination = Math.ceil(products.length / quantityProductPerPage);
	const paginationItem = [];
	for (let index = 0; index < lengthPagination; index++) {
		paginationItem.push(
			<li
				className={`pagination__item ${index === 0 ? " active" : ""} `}
				onClick={() => handlePaginationItem(index)}
			>
				{index + 1}
			</li>,
		);
	}

	function handleNextPaginationItem() {
		const paginationItems = document.querySelectorAll(".pagination__item");
		for (let index = 0; index < paginationItems.length; index++) {
			if (
				paginationItems[index].classList.value.indexOf("active") !== -1 &&
				index < lengthPagination - 1
			) {
				handlePaginationItem(index + 1);
				break;
			}
		}
		window.scrollTo(0, 0);
	}

	function handlePrevPaginationItem() {
		const paginationItems = document.querySelectorAll(".pagination__item");
		paginationItems.forEach((item, indexItem) => {
			if (item.classList.value.indexOf("active") !== -1 && indexItem > 0) {
				handlePaginationItem(indexItem - 1);
			}
		});
		window.scrollTo(0, 0);
	}

	function handlePaginationItem(index) {
		const paginationItems = document.querySelectorAll(".pagination__item");
		paginationItems.forEach((item) => {
			item.classList.remove("active");
		});
		paginationItems[index].classList.add("active");
		dispatch(changeCurrentPaginationItemProduct(index + 1));
		window.scrollTo(0, 0);
	}

	return (
		<section className="shop__pagination">
			<div className="container">
				<div className="pagination-wrap">
					<ul>
						<li
							className="pagination__item_prev"
							onClick={() => handlePrevPaginationItem()}
						>
							{"<"}
						</li>
						{paginationItem.map((item) => item)}
						<li
							className="pagination__item_next"
							onClick={() => handleNextPaginationItem()}
						>
							{">"}
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ShopPagination;
