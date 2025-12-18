import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import userSlice from "./Slices/userSlice";
import roomSlice from "./Slices/roomSlice";
import hotelSlice from "./Slices/hotelSlice";
import bookingSlice from "./Slices/bookingSlice"
import uiSlice from "./Slices/uiSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    room: roomSlice,
    hotel: hotelSlice,
    booking: bookingSlice,
    ui: uiSlice,

  },
  // middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat()
});
