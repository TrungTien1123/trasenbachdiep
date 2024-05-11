import { combineReducers } from "redux"
import viewReducer from "./viewReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    view: viewReducer,
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
})

export default rootReducer;