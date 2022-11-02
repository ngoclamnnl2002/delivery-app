import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurant: {
      imgUrl: null,
      title: null,
      rating: null,
      genre: null,
      address: null,
      short_description: null,
    },
  },
  reducers: {
    setRestaurant(state, action) {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
