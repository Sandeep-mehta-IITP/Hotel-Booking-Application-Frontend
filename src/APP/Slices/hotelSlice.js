import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../API/axiosInstance";
import { toast } from "react-hot-toast";

const initialState = {
  hotel: null,
  loading: false,
  error: null,
};

export const registerHotel = createAsyncThunk(
  "hotel/registerHotel",
  async (hotelData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/hotels", hotelData);
      toast.success(response?.data?.message || "Hotel Registered Successfully");
      return response.data?.data;
    } catch (error) {
    
      console.error("Failed to register hotel:", error);
      toast.error(error.userMessage || "Failed to register hotel.");
      return rejectWithValue(message);
    }
  }
);


const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  extraReducers: (builder) => {
    // REGISTER HOTEL
    builder.addCase(registerHotel.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(registerHotel.fulfilled, (state, action) => {
      state.loading = false;
      state.hotel = action.payload;
    });

    builder.addCase(registerHotel.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default hotelSlice.reducer;