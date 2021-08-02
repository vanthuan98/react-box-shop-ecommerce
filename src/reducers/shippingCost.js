const initialState = 0;

const shippingCost = (state = initialState, action) => {
	switch (action.type) {
		case "SET_SHIPPING_COST":
			state = action.payload;
			return state;
		default:
			return state;
	}
};

export default shippingCost;
