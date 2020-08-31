import { AddProduct, ProductTypes, ResetProducts } from "./types";

export const addProduct = (id: number, quantity: number): AddProduct => ({
  type: ProductTypes.ADD_PRODUCT,
  payload: { id, quantity }
});

export const resetProducts = (): ResetProducts => ({
  type: ProductTypes.RESET_PRODUCTS
});