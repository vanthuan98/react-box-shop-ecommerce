const initialState = 1;

const currentPaginationItem = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_CURRENT_PAGINATION_ITEM_PRODUCT":
			return (state = action.payload);
		default:
			return state;
	}
};

export default currentPaginationItem;
