import blogs from "../blogs";

let initialState = blogs;

const blogsReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return [...state];
	}
};

export default blogsReducer;
