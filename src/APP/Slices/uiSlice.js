import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showHotelReg: false,
  user: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // UI Reducers -------------------
    setShowHotelReg: (state, action) => {
      state.showHotelReg = action.payload;
    },
    toggleShowHotelReg: (state) => {
      state.showHotelReg = !state.showHotelReg;
    },

    // Clerk User Reducers ------------
    setClerkUser: (state, action) => {
      state.user = action.payload;
    },

    clearClerkUser: (state) => {
      state.user = null;
    },
  },
});

export const {
  setShowHotelReg,
  toggleShowHotelReg,
  setClerkUser,
  clearClerkUser,
} = uiSlice.actions;


export default uiSlice.reducer;
