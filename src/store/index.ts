import { createStore, combineReducers } from "redux";
import productReducer from "./products/reducer";
import purchaseReducer from "./purchase/reducer";
import { ProductState } from "./products/types";
import { PurchaseState } from "./purchase/types";

export interface AppState {
  product: ProductState;
  purchase: PurchaseState;
}

const store = createStore(
  combineReducers<AppState>({
    product: productReducer,
    purchase: purchaseReducer
  })
);

export default store;
