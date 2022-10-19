import { useState } from "react";

import { Product } from "@/utils/types";

type State = {
  cart: Product[];
};

export type StateContext = {
  state?: State;
  addToCart?: (paylaod: Product) => void;
};

const initialState: State = {
  cart: [],
};

export const useInitialState = (): StateContext => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload: Product) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
    console.log(payload);
  };

  return {
    state,
    addToCart,
  };
};
