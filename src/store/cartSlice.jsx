import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "userBooking",
  initialState,
  reducers: {},
});

export const { userbooking, remove, removeAll, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
