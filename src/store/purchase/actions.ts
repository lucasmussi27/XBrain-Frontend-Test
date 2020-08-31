import { Product } from "../products/types";
import { GetTotal, PurchaseTypes, ResetPurchases, FinishPurchase, Client } from "./types";

export const getTotal = (products: Product[]): GetTotal => {
  let total = 0;
  products.forEach((prod) => {
    if (prod.quantity !== 0) total += prod.price * prod.quantity;
  });
  return {
    type: PurchaseTypes.GET_TOTAL,
    payload: total
  };
};

export const finishPurchase = (client: Client): FinishPurchase => ({
  type: PurchaseTypes.FINISH_PURCHASE,
  payload: client
});

export const resetPurchases = (): ResetPurchases => ({
  type: PurchaseTypes.RESET_PURCHASES
});