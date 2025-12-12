import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // UI States
  showHotelReg: false,

  // Clerk User States
  user: null,
  isLoaded: false,
  isSignedIn: false,
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
      state.user = action.payload.user;
      state.isLoaded = action.payload.isLoaded;
      state.isSignedIn = action.payload.isSignedIn;
    },

    clearClerkUser: (state) => {
      state.user = null;
      state.isLoaded = false;
      state.isSignedIn = false;
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
