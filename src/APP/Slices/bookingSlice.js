import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../API/axiosInstance";
import { toast } from "react-hot-toast";

const initialState = {
  availability: null,
  userBookings: [],
  hotelBookings: [],
  totalRevenue: 0,
  totalBookings: 0,
  loading: false,
  error: null,
};

export const checkRoomAvailability = createAsyncThunk(
  "booking/checkAvailability",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(
        "/bookings/check-availability",
        payload
      );
      toast.success(res?.data?.message || "Availability checked");
      return res.data?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to check availability";
      console.error("Failed to check availability:", message);
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

export const createBooking = createAsyncThunk(
  "booking/createBooking",
  async (bookingData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/bookings/book", bookingData);
      toast.success(res?.data?.message || "Booking created");
      return res.data?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to create booking";
      console.error("Failed to create booking:", message);
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

export const fetchUserBookings = createAsyncThunk(
  "booking/fetchUserBookings",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/bookings/user");
      toast.success(res?.data?.message || "User bookings fetched");
      return res.data?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to fetch user bookings";
      console.error("Failed to fetch user bookings:", message);
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

export const fetchHotelBookings = createAsyncThunk(
  "booking/fetchHotelBookings",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/bookings/hotel");
      toast.success(res?.data?.message || "Hotel bookings fetched");
      return res.data?.data;
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to fetch hotel bookings";
      console.error("Failed to fetch hotel bookings:", message);
      toast.error(message);
      return rejectWithValue(message);
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    resetAvailability(state) {
      state.availability = null;
    },
  },
  extraReducers: (builder) => {
    // CHECK AVAILABILITY
    builder.addCase(checkRoomAvailability.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(checkRoomAvailability.fulfilled, (state, action) => {
      state.loading = false;
      state.availability = action.payload;
    });
    builder.addCase(checkRoomAvailability.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // CREATE BOOKING
    builder.addCase(createBooking.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createBooking.fulfilled, (state, action) => {
      state.loading = false;
      state.userBookings.unshift(action.payload);
    });
    builder.addCase(createBooking.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // USER BOOKINGS
    builder.addCase(fetchUserBookings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUserBookings.fulfilled, (state, action) => {
      state.loading = false;
      state.userBookings = action.payload;
    });
    builder.addCase(fetchUserBookings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // HOTEL BOOKINGS
    builder.addCase(fetchHotelBookings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHotelBookings.fulfilled, (state, action) => {
      state.loading = false;

      state.hotelBookings = action.payload.bookings;
      state.totalRevenue = action.payload.totalRevenue;
      state.totalBookings = action.payload.totalBookings;
    });
    builder.addCase(fetchHotelBookings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { resetAvailability } = bookingSlice.actions;
export default bookingSlice.reducer;
