import products from "../products";

let initialState = products;

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return [...state];
	}
};

export default productsReducer;
