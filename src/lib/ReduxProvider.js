"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { setCart } from "../features/cart/cartSlice";

export default function ReduxProvider({ children }) {
  useEffect(() => {
    const saved = localStorage.getItem("cartState");
    if (saved) {
      const parsed = JSON.parse(saved);
      store.dispatch(setCart(parsed.items));
    }

    // Save to localStorage on every update
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      localStorage.setItem("cartState", JSON.stringify(state.cart));
    });

    return () => unsubscribe();
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
