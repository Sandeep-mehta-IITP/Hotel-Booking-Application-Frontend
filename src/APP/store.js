import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import roomSlice from "./Slices/roomSlice";
import hotelSlice from "./Slices/hotelSlice";
import bookingSlice from "./Slices/bookingSlice"

export const store = configureStore({
  reducer: {
    user: userSlice,
    room: roomSlice,
    hotel: hotelSlice,
    booking: bookingSlice,

  },
  // middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat()
});
