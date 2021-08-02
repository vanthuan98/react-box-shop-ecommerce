import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPaginationItemBlog } from "../../actions";

const BlogPagination = () => {
	const blogs = useSelector((state) => state.blogsReducer);
	const quantityBlogPerPage = useSelector((state) => state.quantityBlogPerPage);
	const dispatch = useDispatch();

	const lengthPagination = Math.ceil(blogs.length / quantityBlogPerPage);
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
	}

	function handlePrevPaginationItem() {
		const paginationItems = document.querySelectorAll(".pagination__item");
		paginationItems.forEach((item, indexItem) => {
			if (item.classList.value.indexOf("active") !== -1 && indexItem > 0) {
				handlePaginationItem(indexItem - 1);
			}
		});
	}

	function handlePaginationItem(index) {
		const paginationItems = document.querySelectorAll(".pagination__item");
		paginationItems.forEach((item) => {
			item.classList.remove("active");
		});
		paginationItems[index].classList.add("active");
		dispatch(changeCurrentPaginationItemBlog(index + 1));
	}

	return (
		<section className="blog__pagination">
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

export default BlogPagination;
