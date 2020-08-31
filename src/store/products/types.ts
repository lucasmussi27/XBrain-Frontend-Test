export interface Product {
  id: number;
  image_url: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ProductState {
  products: Product[];
}

export enum ProductTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  RESET_PRODUCTS = "RESET_PRODUCTS"
}

export interface AddProduct {
  type: ProductTypes.ADD_PRODUCT;
  payload: { id: number; quantity: number };
}

export interface ResetProducts {
  type: ProductTypes.RESET_PRODUCTS;
}

export type ProductAction = AddProduct | ResetProducts;
