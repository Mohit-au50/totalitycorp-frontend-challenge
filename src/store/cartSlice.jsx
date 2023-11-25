import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "userBooking",
  initialState,
  reducers: {
    userCurrentbooking: (state, action) => {},
    userTotalbooking: (state, action) => {},
    addHotel: (state, action) => {},
    removeHotel: (state, action) => {},
    calculateTotal: (state, action) => {},
  },
});

export const { userbooking, remove, removeAll, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
