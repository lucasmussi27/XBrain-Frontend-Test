import { PurchaseState, PurchaseTypes, PurchaseAction } from "./types";

const initialState: PurchaseState = {
  client: {
    name: "",
    email: "",
    sex: ""
  },
  total: 0
};

const purchaseReducer = (
  state = initialState,
  action: PurchaseAction
): PurchaseState => {
  switch (action.type) {
    case PurchaseTypes.GET_TOTAL:
      return {
        ...state,
        total: action.payload
      };
    case PurchaseTypes.FINISH_PURCHASE:
      return {
        ...state,
        client: action.payload
      }
    case PurchaseTypes.RESET_PURCHASES:
      return {
        ...state,
        total: 0,
        client: { name: "", email: "", sex: "" }
      };
    default:
      return state;
  }
};

export default purchaseReducer;