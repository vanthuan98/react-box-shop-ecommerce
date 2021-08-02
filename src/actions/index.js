export const changeQuantityProductPerPage = (quantity) => {
	return {
		type: "CHANGE_QUANTITY_PRODUCT_PER_PAGE",
		payload: quantity,
	};
};

export const changeCurrentPaginationItemProduct = (paginationItem) => {
	return {
		type: "CHANGE_CURRENT_PAGINATION_ITEM_PRODUCT",
		payload: paginationItem,
	};
};

export const changeCurrentPaginationItemBlog = (paginationItem) => {
	return {
		type: "CHANGE_CURRENT_PAGINATION_ITEM_BLOG",
		payload: paginationItem,
	};
};

export const addProductToCart = (product, quantity) => {
	return {
		type: "ADD_PRODUCT_TO_CART",
		payload: {
			product,
			quantity,
		},
	};
};

export const deleteProductInCart = (product) => {
	return {
		type: "DELETE_PRODUCT_IN_CART",
		payload: product,
	};
};

export const changeQuantityProductInCart = (product, number) => {
	return {
		type: "CHANGE_QUANTITY_PRODUCT_IN_CART",
		payload: {
			product,
			number,
		},
	};
};

export const setShippingCost = (cost) => {
	return {
		type: "SET_SHIPPING_COST",
		payload: cost,
	};
};
