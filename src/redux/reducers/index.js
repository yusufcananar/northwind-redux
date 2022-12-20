import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import categoryListReducer from "./categoryListReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import productListReducer from "./productListReducer";

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
  cartReducer
});

export default rootReducer;
