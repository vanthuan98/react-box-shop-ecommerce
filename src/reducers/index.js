import { combineReducers } from "redux";
import productsReducer from "./products";
import blogsReducer from "./blogs";
import quantityProductPerPage from "./quantityProductPerPage";
import currentPaginationItemProduct from "./currentPaginationItemProduct";
import currentPaginationItemBlog from "./currentPaginationBlog";
import quantityBlogPerPage from "./quantityBlogperpage";
import cartProducts from "./cartProducts";
import shippingCost from "./shippingCost";

const rootReducer = combineReducers({
	productsReducer,
	blogsReducer,
	quantityProductPerPage,
	currentPaginationItemProduct,
	quantityBlogPerPage,
	currentPaginationItemBlog,
	cartProducts,
	shippingCost,
});

export default rootReducer;
