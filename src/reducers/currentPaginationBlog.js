const initialState = 1;

const currentPaginationItemBlog = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_CURRENT_PAGINATION_ITEM_BLOG":
			return (state = action.payload);
		default:
			return state;
	}
};

export default currentPaginationItemBlog;
