export interface Client {
  name: string;
  email: string;
  sex: string;
}

export interface PurchaseState {
  client: Client;
  total: number;
}

export enum PurchaseTypes {
  GET_TOTAL = "GET_TOTAL",
  FINISH_PURCHASE = "FINISH+PURCHASE",
  RESET_PURCHASES = "RESET_PURCHASES"
}

export interface GetTotal {
  type: PurchaseTypes.GET_TOTAL;
  payload: number;
}

export interface FinishPurchase {
  type: PurchaseTypes.FINISH_PURCHASE;
  payload: Client;
}

export interface ResetPurchases {
  type: PurchaseTypes.RESET_PURCHASES;
}

export type PurchaseAction = GetTotal | FinishPurchase | ResetPurchases;