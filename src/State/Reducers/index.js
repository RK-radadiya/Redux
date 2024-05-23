import { combineReducers } from "redux";
import product_reducer from "./Product.reducer";
import number_reducer from "./Number.reducer";


const reducers = combineReducers({
    product : product_reducer,
    number : number_reducer


})

export default reducers