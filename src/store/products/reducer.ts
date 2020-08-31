import { ProductAction, ProductState, ProductTypes } from "./types";

const initialState: ProductState = {
  products: [
    { 
      id: 1,
      image_url: require("../../assets/imgs/produto-01.jpeg"),  
      name: "AirPods Apple Fones de Ouvido",
      price: 1499,
      quantity: 0
    },
    { 
      id: 2,
      image_url: require("../../assets/imgs/produto-02.jpeg"),  
      name: "Capa de Silicone para iPhone 8/7 cor Areia - Rosa",
      price: 299,
      quantity: 0
    },
    { 
      id: 3,
      image_url: require("../../assets/imgs/produto-03.jpeg"),  
      name: "Apple Pencil",
      price: 729,
      quantity: 0
    },
    { 
      id: 4,
      image_url: require("../../assets/imgs/produto-04.jpeg"),  
      name: "Magic Mouse 2 - Prateado",
      price: 549,
      quantity: 0
    },
    { 
      id: 5,
      image_url: require("../../assets/imgs/produto-05.jpeg"),  
      name: "Caixa prateada de alumínio com pulseira esportiva branca",
      price: 2899,
      quantity: 0
    },
    { 
      id: 6,
      image_url: require("../../assets/imgs/produto-06.jpeg"),  
      name: "Cabo de lightning para USB (1m)",
      price: 149,
      quantity: 0
    },
    { 
      id: 7,
      image_url: require("../../assets/imgs/produto-07.jpeg"),  
      name: "Smart Keyboard para iPac Pro 12,9 polegadas - inglês (EUA)",
      price: 1099,
      quantity: 0
    },
    { 
      id: 8,
      image_url: require("../../assets/imgs/produto-08.jpeg"),  
      name: "Carregador USB de 5W Apple",
      price: 149,
      quantity: 0
    }
  ]
}

const productReducer = (
  state = initialState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((prod) => {
            if (prod.id === action.payload.id)
              prod.quantity = action.payload.quantity;
            return prod;
          })
        ]
      };
    case ProductTypes.RESET_PRODUCTS:
      return {
        ...state,
        products: [
          ...state.products.filter((prod) => {
            if (prod.quantity !== 0) prod.quantity = 0;
            return prod;
          })
        ]
      };
    default:
      return state;
  }
};

export default productReducer;