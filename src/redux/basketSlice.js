import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
  },
  reducers: {
    addToBasket(state, action) {
      state.products = [...state.products, action.payload];
    },
    removeFromBasket(state, action) {
      const index = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.products];
      if (index < 0) return;
      newBasket.splice(index, 1);
      state.products = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
