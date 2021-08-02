const data = JSON.parse(localStorage.getItem("CART"));
const initialState = data ? data : [];

const cartProducts = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_PRODUCT_TO_CART":
			let { product, quantity } = action.payload;
			let indexOfAddProduct;
			for (let i = 0; i < state.length; i++) {
				if (product.id === state[i].id) {
					indexOfAddProduct = i;
				}
			}
			if (indexOfAddProduct === undefined) {
				product.quantity = quantity;
				state.push(product);
			} else {
				state[indexOfAddProduct].quantity += quantity;
			}
			localStorage.setItem("CART", JSON.stringify(state));
			return [...state];
		case "DELETE_PRODUCT_IN_CART":
			// let product = action.payload;
			let indexOfDeleteProduct;
			for (let i = 0; i < state.length; i++) {
				if (action.payload.id === state[i].id) {
					indexOfDeleteProduct = i;
				}
			}
			state.splice(indexOfDeleteProduct, 1);
			localStorage.setItem("CART", JSON.stringify(state));
			return [...state];
		case "CHANGE_QUANTITY_PRODUCT_IN_CART":
			let indexOfProductChangeQuantity;
			for (let i = 0; i < state.length; i++) {
				if (action.payload.product.id === state[i].id) {
					indexOfProductChangeQuantity = i;
				}
			}
			state[indexOfProductChangeQuantity].quantity += action.payload.number;
			if (state[indexOfProductChangeQuantity].quantity <= 0) {
				state[indexOfProductChangeQuantity].quantity = 1;
			}
			localStorage.setItem("CART", JSON.stringify(state));
			return [...state];
		default:
			return [...state];
	}
};

export default cartProducts;
