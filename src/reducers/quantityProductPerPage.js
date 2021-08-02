const initialState = 10;

const quantityProductPerPage = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_QUANTITY_PRODUCT_PER_PAGE":
			return (state = action.payload);
		default:
			return state;
	}
};

export default quantityProductPerPage;
